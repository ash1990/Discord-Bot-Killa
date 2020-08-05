const { Discord, Client, MessageEmbed } = require('discord.js');
const items = require('../weapons/weaponmods.json');

module.exports = {
    name: "weapon",
    aliases: ["weapon","wep","mods","mod"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        if (args.join(" ").length < 2) {
            message.channel.send(`Blyat, How am I supposed to find an weapon mods if you give me so little information, give me at least 3 characters.`)
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }

        const matches = items["tarkovmods"].filter((value) => value.alias.toLowerCase().includes(args.join(" ")));
        var unprinteditems = [``]; 
        let matchesDone = 0;
        let notprinting = 0;

        matches.forEach((match) => {
            matchesDone +=1;
            if((matchesDone > 0) && (matchesDone <= 2)){ 
                matchesDone += 1;
                const embed = new MessageEmbed()
                    .setColor('#FDFDFD')
                    .setAuthor(`${match.name}`, 'https://i.imgur.com/bDFrogC.png', 'https://docs.google.com/spreadsheets/d/1yHyVEVB5oN0qL_pR1qTNP1_ICmzJ3SCFJQNb6XDM_DQ/edit#gid=0', 'https://docs.google.com/spreadsheets/d/1yHyVEVB5oN0qL_pR1qTNP1_ICmzJ3SCFJQNb6XDM_DQ/edit#gid=0')
                    .setDescription(
                        `**Mod type:** ${String(match.typemod)}\n` +
                        `**Category:** ${String(match.category)}\n` +
                        `**Caliber:** ${String(match.caliber)}\n` +
                        `**Top ammo:** ${String(match.topammo)}\n` +
                        `**Budget ammo:** ${String(match.budgetammo)}\n` +
                        "\n" +
                        `**Notes:** ${String(match.notes)}\n`
                    )
                    .setThumbnail(match.imagePath)
                    .setFooter('Data from: Virion\'s Weapon Modding Guide | Updated:')
                    .setTimestamp(new Date(`${String(match.timestamp).substring(0,4)}-${String(match.timestamp).substring(4,6)}-${String(match.timestamp).substring(6,8)}T${String(match.timestamp).substring(8,10)}:${String(match.timestamp).substring(10,12)}:${String(match.timestamp).substring(12,14)}`).toString())
                    .setImage(`${String(match.image)}`)
                message.channel.send(embed);
            }
            if((matchesDone >= 2) && (matchesDone <= 10)){
                unprinteditems.push(`${match.name}`)
            }
            if((matchesDone > 10)){
                notprinting += 1;
            }
        })
        if (matchesDone > 1) {
            const embed = new MessageEmbed()
                .setColor('#FDFDFD')
                .setAuthor("The following weapon mods weren't printed out:", 'https://i.imgur.com/bDFrogC.png', 'https://docs.google.com/spreadsheets/d/1yHyVEVB5oN0qL_pR1qTNP1_ICmzJ3SCFJQNb6XDM_DQ/edit#gid=0')
                .setDescription(unprinteditems)
                .setFooter("And " + notprinting + " more items")
            message.channel.send(embed);
        }
        if (matchesDone <= 0) {
            message.channel.send("Pizdec this weapon mods does not exist.")
            .then(msg => {
                message.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            })
            return;
        }
    }
}