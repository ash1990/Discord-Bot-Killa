const { Discord, Client, MessageEmbed } = require('discord.js');
const items = require('../items/items-eft.json');

module.exports = {
    name: "item",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        if (args.join(" ").length < 3) {
            message.channel.send(`Blyat, how am I supposed to find an item if you give me so little information, give me at least 3 characters.`)
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }

        const matches = items["tarkovitems"].filter((value) => value.name.toLowerCase().includes(args.join(" ")));
        const result = items["tarkovitems"].filter(item => item.name.toLowerCase() === args.join(" ")); 
        var unprinteditems = [``]; 
        let matchesDone = 0;
        let notprinting = 0;
        const count = 0;
        

        if(result.length > 0){
            matchesDone += 1;
            const embed1 = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor(`${result[0].name}`, 'https://i.imgur.com/ROATYNR.png', 'https://eft-loot.com/')
                .setDescription(
                    `**Category:** ${result[0].category.replace('_', " ")}\n` +
                    `**Average Price:** ${String(result[0].price_avg).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽ \n` +
                    `**Price per slot:** ${String(result[0].price_per_slot).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽ \n` +
                    `**Slots:** ${result[0].slots}\n`
                )
                .setThumbnail(result[0].imagePath)
                .setFooter('Data from: eft-loot.com | Updated:')
                .setTimestamp(new Date(`${String(result[0].timestamp).substring(0,4)}-${String(result.timestamp).substring(4,6)}-${String(result.timestamp).substring(6,8)}T${String(result.timestamp).substring(8,10)}:${String(result.timestamp).substring(10,12)}:${String(result.timestamp).substring(12,14)}`).toString())
            message.channel.send(embed1);
        } else { 
            matches.forEach((match) => {
                matchesDone +=1;
                if((matchesDone > 0) && (matchesDone <= 3)){ 
                    const embed = new MessageEmbed()
                        .setColor('#FDFDFD')
                        .setAuthor(`${match.name}`, 'https://i.imgur.com/ROATYNR.png', 'https://eft-loot.com/')
                        .setDescription(
                            `**Category:** ${match.category.replace('_', " ")}\n` +
                            `**Average Price:** ${String(match.price_avg).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽ \n` +
                            `**Price per slot:** ${String(match.price_per_slot).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ".")} ₽ \n` +
                            `**Slots:** ${match.slots}\n`
                        )
                        .setThumbnail(match.imagePath)
                        .setFooter('Data from: eft-loot.com | Updated:')
                        .setTimestamp(new Date(`${String(match.timestamp).substring(0,4)}-${String(match.timestamp).substring(4,6)}-${String(match.timestamp).substring(6,8)}T${String(match.timestamp).substring(8,10)}:${String(match.timestamp).substring(10,12)}:${String(match.timestamp).substring(12,14)}`).toString())
                    message.channel.send(embed);
                }
                if((matchesDone > 3) && (matchesDone <= 10)){
                    unprinteditems.push(`${match.name}`)
                }
                if((matchesDone > 10)){
                    notprinting += 1;
                }
            })
        }
            if (matchesDone > 3) {
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor("The following items weren't printed out:", 'https://i.imgur.com/ROATYNR.png', 'https://eft-loot.com/')
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