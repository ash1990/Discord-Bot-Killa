const { Discord, Client, MessageEmbed } = require('discord.js');
let items = require('../items-ru/items-eft-ru.json');
setTimeout(() => {
    setInterval(() => {
        items = require('../items-ru/items-eft-ru.json');
    }, 12*60*60e3);
}, 60e3);

module.exports = {
    name: "предмет",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {

        if (args.join(" ").length < 3) {
            message.channel.send(`Как я могу найти предмет, если вы даете мне так мало информации, дайте мне как минимум 3 символа.`)
            .then(message => {
                message.delete({timeout: 5000})
            })
            return;
        }

        const matches = items.filter((value) => value.name.toLowerCase().includes(args.join(" ")));
        var unprinteditems = [``]; 
        let matchesDone = 0;
        let notprinting = 0;
        

        matches.forEach((match) => {
            matchesDone +=1;
            if((matchesDone > 0) && (matchesDone <= 3)){ 
                const embed = new MessageEmbed()
                    .setColor('#FDFDFD')
                    .setAuthor(`${match.name}`, 'https://imgur.com/jO4J56X.png', `https://tarkov-market.com/`)
                    .addField("**Цена:**", `${String(match.price).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽`, true)
                    .addField('\u200b', '\u200b', true)
                    .addField("**Средняя цена 24часа:**", `${String(match.avg24hPrice).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽`, true)
                    .addField("**слота:**", `${match.slots} `, true)
                    .addField('\u200b', '\u200b', true)
                    .addField("**Цена за слот:**", `${String(Math.floor(match.price / match.slots)).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽`, true)
                    .addField("**От трейдера:**", `${match.traderName}‎‎ `, true)
                    .addField('\u200b', '\u200b', true)
                    .addField("**Цена трейдера:**", `${String(match.traderPrice).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ${match.traderPriceCur}  `, true)
                    .setThumbnail(match.img)
                    .setFooter('Данные из: tarkov-market.com | обновленный:')
                    .setTimestamp(new Date(`${String(match.updated)}`))
                message.channel.send(embed);
            }
            if((matchesDone > 3) && (matchesDone <= 10)){
                unprinteditems.push(`${match.name}`)
            }
            if((matchesDone > 10)){
                notprinting += 1;
            }
        })

        if (matchesDone > 3) {
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor("Следующие предметы не были распечатаны:", 'https://imgur.com/jO4J56X.png', 'https://tarkov-market.com/')
                .setDescription(unprinteditems)
                .setFooter("И " + notprinting + " больше предметов")
            message.channel.send(embed);
        }
        if (matchesDone <= 0) {
            message.channel.send("Этот предмет не существует.")
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }
    }
}