const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "maps",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        const maps = new MessageEmbed()
            .setColor(0xfdfdfd)
            .setAuthor('All maps', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Map_of_Tarkov') //Page of source
            .setDescription("Use the following commands with \`Killa map\` infront")
            .setImage('https://i.imgur.com/Y6qc2VZ.png')
        message.channel.send(maps);
    }
}