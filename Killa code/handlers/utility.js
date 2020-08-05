const Discord = require('discord.js');
const token = require('../token.json') 
const config = require('../config.json')

module.exports = {
    //default message sender handler so if theres changes you can just change it here. like how you handle errors
    sendMessage: async(channel, message, options) => {
        return await channel.send(message, options).catch();
    },
    //default message edit handler so if theres changes you can just change it here.
    editMessage: async(message, newcontent, options) => {
        return await message.edit(newcontent, options).catch();
    },
    //simple function to get what color aki should make embeds. Returns the color aki display in chat to fit her nickname
    getColor: message => {
        if (message.guild) {
            return message.guild.me.displayColor || config.white;
        } else {
            return config.defaultcolor;
        }
    }
}