const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "donate",
    aliases: ["donate", "patreon"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        const donate = new MessageEmbed()
            .setColor(0xfdfdfd)
            .setTitle('Subscribe to my patreon to help the bot running') //Page of source
            .setDescription(
                "I need a small amount to keep the bot running and update the prices please consider subscribing to my patreon \n" + 
                "[Click here to go to my patreon!](https://www.patreon.com/user?u=36817292)"
                )
            .setThumbnail('https://lh3.googleusercontent.com/Na6tpXBhckELpKiT8y0rTE6iJeytOHszx3yBdPbVujrjD0uPrZlNq6CgdagSORdhaQ')
        message.channel.send(donate);
    }
}