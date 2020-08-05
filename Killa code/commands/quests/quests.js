const { Discord, Client, MessageEmbed } = require('discord.js');
const items = require('../quests/quests.json');

module.exports = {
    name: "quest",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        if (args.join(" ").length < 2) {
            message.channel.send(`Blyat, how am I supposed to find an quest if you give me so little information, give me at least 3 characters.`)
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }

        const matches = items["tarkovitems"].filter((value) => value.Quest.toLowerCase().includes(args.join(" ")));
        const result = items["tarkovitems"].filter(item => item.Quest.toLowerCase() === args.join(" ")); 
        var unprinteditems = [``]; 
        let matchesDone = 0;
        let notprinting = 0;
        const count = 0;
        

        if(result.length > 0){
            matchesDone += 1;
            const embed1 = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor(`${result[0].Quest}`, 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Quests')
                .setDescription(
                    `**Quest giver:** \n${result[0].Person}\n\n` +
                    `**Type quest:** \n${result[0].Type} \n\n` +
                    `**Objective:** \n${result[0].Objective}\n\n` +
                    `**Reward:** \n${result[0].Reward}\n\n`
                )
                .setThumbnail(result[0].imagePath)
                .setFooter('Data from: eft-loot.com')
            message.channel.send(embed1);
        } else { 
            matches.forEach((match) => {
                matchesDone +=1;
                if((matchesDone > 0) && (matchesDone <= 2)){ 
                    const embed = new MessageEmbed()
                        .setColor('#FDFDFD')
                        .setAuthor(`${match.Quest}`, 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Quests')
                        .setDescription(
                            `**Quest giver:** \n${match.Person}\n\n` +
                            `**Type quest:** \n${match.Type} \n\n` +
                            `**Objective:** \n${match.Objective}\n\n` +
                            `**Reward:** \n${match.Reward}\n\n`
                        )
                        .setFooter('Data from: escapefromtarkov.gamepedia.com')
                    message.channel.send(embed);
                }
                if((matchesDone > 2) && (matchesDone <= 10)){
                    unprinteditems.push(`${match.Quest}`)
                }
                if((matchesDone > 10)){
                    notprinting += 1;
                }
            })
        }
            if (matchesDone > 2) {
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor("The following quests weren't printed out:", 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Quests')
                .setDescription(unprinteditems)
                .setFooter("And " + notprinting + " more items")
            message.channel.send(embed);
        }
        if (matchesDone <= 0) {
            message.channel.send("Pizdec this quests does not exist.")
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }
    }
}