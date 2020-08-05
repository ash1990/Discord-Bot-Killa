const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "whatserversdddddddd",
    aliases: ["whatserversddddddddd"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        message.client.guilds.cache.forEach((guild) => {
            console.log(`Guild: ${guild.name}: Members: ${guild.memberCount}:  ID: ${guild.id}`)
        })
    }
}