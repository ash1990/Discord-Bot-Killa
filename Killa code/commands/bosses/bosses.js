const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "bosses",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        const maps = new MessageEmbed()
            .setColor(0xfdfdfd)
            .setAuthor('All bosses', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Characters') //Page of source
            .setDescription("Use the boss names with \`Killa boss\` infront")
            .setImage('https://i.imgur.com/WbVXFju.png')
        message.channel.send(maps);
    }
}