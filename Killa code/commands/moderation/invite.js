const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "invite",
    aliases: ["inv"],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        const embed = new MessageEmbed()
            .setColor(0xfdfdfd)
            .setTitle('Here is the link to invite Killa to your server bratan!') //Page of source
            .setDescription("[Click me to invite Killa!](https://discordapp.com/oauth2/authorize?client_id=673871058708725790&scope=bot&permissions=537390080)")
            .setThumbnail('https://i.imgur.com/lxmsMyi.png')
        message.channel.send(embed);
    }
}