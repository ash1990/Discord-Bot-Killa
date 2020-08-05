const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["?","commands"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        const embed = new MessageEmbed()
            .setColor(0xfdfdfd)
            .setTitle('Available commands:') //Page of source
            .setThumbnail('https://i.imgur.com/lxmsMyi.png')
            .setDescription("Enter **Killa** or **!k** infront of the following commands:")
            .addField(":bar_chart:  Ammo", "\`Ammo\` \n  \`Ammo [Ammo type] \`", true)
            .addField('\u200b', '\u200b', true)
            .addField(":map: Maps", "\`Maps\`\n  \` Map [Map name] \`", true)
            .addField(":package: Items", "\`Item [item name] \nпредмет [название предмета]\`", true)
            .addField('\u200b', '\u200b', true)
            .addField(":key: Keys", "\`key [key name] \`", true)
            .addField(":e_mail: Invite", "\`invite\`", true)
            .addField('\u200b', '\u200b', true)
            .addField(":grey_question: Support server", "\`support\`", true)
            .addField(":skull_crossbones: Bosses", "\`Bosses\` \n  \`Boss [boss name] \`", true)
            .addField('\u200b', '\u200b', true)
            .addField(":gun: Weapon", "`Weapon [weapon name] \`", true)
            .addField(":page_with_curl:  Quest", "`Quest [quest name] \`", true)
            .addField('\u200b', '\u200b', true)
            .addField(":dollar: Patreon", "`patreon \`", true)
        message.channel.send(embed);
    }
}