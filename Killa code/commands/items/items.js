const { Discord, Client, MessageEmbed } = require('discord.js');
let items = require('../items/items-eft.json');
setTimeout(() => {
    setInterval(() => {
        items = require('../items/items-eft.json');
    }, 12*60*60e3);
}, 60e3);

module.exports = {
    name: "item",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {

        if (args.join(" ").length < 3) {
            message.channel.send(`Blyat, how am I supposed to find an item if you give me so little information, give me at least 3 characters.`)
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
            if((matchesDone > 0) && (matchesDone <= 2)){ 
                const embed = new MessageEmbed()
                    .setColor('#FDFDFD')
                    .setAuthor(`${match.name}`, 'https://imgur.com/jO4J56X.png', `https://tarkov-market.com/`)
                    .addField("**Price:**", `${String(match.price).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽`, true)
                    .addField('\u200b', '\u200b', true)
                    .addField("**Average Price 24h:**", `${String(match.avg24hPrice).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽`, true)
                    .addField("**Slots:**", `${match.slots} `, true)
                    .addField('\u200b', '\u200b', true)
                    .addField("**Price per slot:**", `${String(Math.floor(match.price / match.slots)).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽`, true)
                    .addField("**From trader:**", `${match.traderName}‎‎ `, true)
                    .addField('\u200b', '\u200b', true)
                    .addField("**Trader Price:**", `${String(match.traderPrice).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ${match.traderPriceCur}  `, true)
                    .setThumbnail(match.img)
                    .setFooter('Data from: tarkov-market.com | Updated:')
                    .setTimestamp(new Date(`${String(match.updated)}`))
                message.channel.send(embed);
            }
            if((matchesDone > 2) && (matchesDone <= 10)){
                unprinteditems.push(`${match.name}`)
            }
            if((matchesDone > 10)){
                notprinting += 1;
            }
        })

        if (matchesDone > 2) {
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor("The following items weren't printed out:", 'https://imgur.com/jO4J56X.png', 'https://tarkov-market.com/')
                .setDescription(unprinteditems)
                .setFooter("And " + notprinting + " more items")
            message.channel.send(embed);
        }
        if (matchesDone <= 0) {
            message.channel.send("Pizdec this item does not exist.")
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }
    }
}