const { Discord, Client, MessageEmbed } = require('discord.js');
const items = require('../keys/keys.json');

module.exports = {
    name: "key",
    aliases: ["keys"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        if (args.join(" ").length < 3) {
            message.channel.send(`Blyat, How am I supposed to find an key if you give me so little information, give me at least 3 characters.`)
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

        if(result.length > 0){
            matchesDone += 1;
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor(`${result[0].name}`, 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Keys_%26_Intel')
                .setDescription(
                    `**Usages:** ${String(result[0].uses)}\n` +
                    `**Category:** ${result[0].category.replace('_', " ")}\n` +
                    "\n" +
                    `**Unlocks the following:** \n ${String(result[0].opens)}\n` +
                    "\n" +
                    `**Behind the door:** \n ${String(result[0].behinddoor)}\n`
                )
                .setThumbnail(result[0].imagePath)
                .setFooter('Data from: escapefromtarkov.gamepedia.com | Updated:')
                .setTimestamp(new Date(`${String(result[0].timestamp).substring(0,4)}-${String(result[0].timestamp).substring(4,6)}-${String(result[0].timestamp).substring(6,8)}T${String(result[0].timestamp).substring(8,10)}:${String(result[0].timestamp).substring(10,12)}:${String(result[0].timestamp).substring(12,14)}`).toString())
                .setImage(`${String(result[0].image)}`)
            message.channel.send(embed);
        } else { 
            matches.forEach((match) => {
                matchesDone +=1;
                if((matchesDone > 0) && (matchesDone <= 3)){ 
                    const embed = new MessageEmbed()
                        .setColor('#FDFDFD')
                        .setAuthor(`Key: ${match.name}`, 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Keys_%26_Intel')
                        .setDescription(
                            `**Usages:** ${String(match.uses)}\n` +
                            `**Category:** ${match.category.replace('_', " ")}\n` +
                            "\n" +
                            `**Unlocks the following:** \n ${String(match.opens)}\n` +
                            "\n" +
                            `**Behind the door:** \n ${String(match.behinddoor)}\n`
                        )
                        .setThumbnail(match.imagePath)
                        .setFooter('Data from: escapefromtarkov.gamepedia.com | Updated:')
                        .setTimestamp(new Date(`${String(match.timestamp).substring(0,4)}-${String(match.timestamp).substring(4,6)}-${String(match.timestamp).substring(6,8)}T${String(match.timestamp).substring(8,10)}:${String(match.timestamp).substring(10,12)}:${String(match.timestamp).substring(12,14)}`).toString())
                        .setImage(`${String(match.image)}`)
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
            if (matchesDone > 5) {
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor("The following keys weren't printed out:", 'https://i.imgur.com/ROATYNR.png', 'https://eft-loot.com/')
                .setDescription(unprinteditems)
                .setFooter("And " + notprinting + " more items")
            message.channel.send(embed);
        }
        if (matchesDone <= 0) {
            message.channel.send("Pizdec this key does not exist.")
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }
    }
}