const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "map",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        switch(args.join(" ")) {
            case 'shoreline':
                const shoreline = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Shoreline map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Shoreline') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e1/Actual_caches_37_map_shoreline.jpg')
                message.channel.send(shoreline);
            break;

            case 'customs': 
                const customs = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Customs map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Customs') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c8/Customs_Nuxx_20190106_1.2.png')
                message.channel.send(customs);
            break;

            case 'factory': 
                const factory = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Factory map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Factory') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/cd/Factory_3D_b_Johnny_Tushonka.jpg')
                message.channel.send(factory);
            break;

            case 'interchange': 
                const interchange = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Interchange map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Interchange') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e5/InterchangeMap_Updated_4.24.2020.png')
                message.channel.send(interchange);
            break;

            case 'reserve': 
                const reserve = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Reserve map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Reserve') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/9f/Keys_and_doors_v3.png')
                message.channel.send(reserve);
            break;

            case 'lab': 
            case 'the labs':
            case 'labs':
                const lab = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('The Lab map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/The_Lab') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://i.imgur.com/e6Ie7qQ.png')
                message.channel.send(lab);
            break;

            case 'woods': 
                const woods = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Woods map', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Woods') //Page of source
                    .setDescription("**Open original if you can't read map**")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/0/05/Glory4lyfeWoods_map_v4_marked.png')
                message.channel.send(woods);
            break;

            default:
                const maps = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('All maps', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Map_of_Tarkov') //Page of source
                    .setDescription("Use the following commands with **Killa map** infront")
                    .setImage('https://i.imgur.com/Y6qc2VZ.png')
                message.channel.send(maps);
            break;
        }
    }
}