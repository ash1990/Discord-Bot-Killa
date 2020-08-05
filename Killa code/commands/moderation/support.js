const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "support",
    aliases: ["sup"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        const embed = new MessageEmbed()
            .setColor(0xfdfdfd)
            .setTitle('Here is the link to the Killa support server bratan!') //Page of source
            .setDescription("https://discord.gg/kMxSJ8j")
            .setThumbnail('https://i.imgur.com/lxmsMyi.png')
        message.channel.send(embed);
    }
}