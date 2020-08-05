const Discord = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ["latency", "lag", "lagg", "delay"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        //sending a message as baseline to check when it was created cuz new Date() isnt accurate with discord times
        let pong = await message.client.utility.sendMessage(message.channel, 'Pinging...')
        let now = pong.createdTimestamp;
        //check difference between when message was made and our message was made + database time
        let roundTripTime = now - message.createdTimestamp;
        let embed = new Discord.MessageEmbed()
            .setColor(0xfdfdfd)
            .addField(`ping-roundtrip`, `\`\`\`${roundTripTime} ms\`\`\``, true)
        //edit our ping message to display the embed
        message.client.utility.editMessage(pong, `:ping_pong: **Pong**`, {embed: embed});
    }
}