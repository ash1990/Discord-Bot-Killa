const Discord = require('discord.js');
const starttime = new Date().getTime();

module.exports = {
    name: "shards",
    aliases: ["shard", "usage", "ram","stats"],
    run: async(message, args, language) => {
        let timepassed = new Date().getTime() - starttime;
        let days = Math.floor(timepassed/1000/60/60/24)
        timepassed -= days * 1000 * 60 * 60 * 24
        let hours = Math.floor(timepassed/1000/60/60)
        timepassed -= hours * 1000 * 60 * 60
        let minutes = Math.floor(timepassed/1000/60)
        if (days + hours + minutes === 0) minutes = 1;
        days = days == 1 ? `${days} day` : `${days} days`
        hours = hours == 1 ? `${hours} hour` : `${hours} hours`
        minutes = minutes == 1 ? `${minutes} minute` : `${minutes} minutes`

        const promises = [
            message.client.shard.fetchClientValues('guilds.cache.size'),
            message.client.shard.broadcastEval('this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)'),
            message.client.shard.fetchClientValues('users.cache.size'),
            message.client.shard.broadcastEval('this.guilds.cache.reduce((prev, guild) => prev + guild.members.cache.size, 0)'),
            message.client.shard.broadcastEval('process.memoryUsage()')
        ]
        const results = await Promise.all(promises)

        const embed = new Discord.MessageEmbed()
            .setTitle(`Killa's Statistics`)
            .setColor(message.client.utility.getColor(message))
            .setDescription(`You ran this command from shard **${message.client.shard.ids[0]+1}** out of my total **${message.client.options.shardCount}** shards.\nThis shard has last been rebooted ${days} ${hours} and ${minutes} ago`)
            for (let i = 0; i < message.client.options.shardCount; i++) {
                embed.addField(`**Shard ${i+1}**`, `\`\`\`js
Servers: ${String(results[0][i]).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}
Users: ${String(results[1][i]).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}
Users Cached: ${String(results[2][i]).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}
Members Cached: ${String(results[3][i]).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}
Ram: ${Math.round((results[4][i].rss / 1024 / 1024 * 100) / 100)} MB\n${Math.round((results[4][i].heapUsed / 1024 / 1024 * 100) / 100)} MB / ${Math.round((results[4][i].heapTotal / 1024 / 1024 * 100) / 100)} MB Heap\`\`\``, true)
            }
        const totalservers = results[0].reduce((prev, data) => prev + data)
        const totalusers = results[1].reduce((prev, data) => prev + data)
        const cachedusers = results[2].reduce((prev, data) => prev + data)
        const cachedmembers = results[3].reduce((prev, data) => prev + data)
        let totalrss = 0;
        let totalheap = 0;
        let totalheapused = 0;
        let totalexternal = 0;
        results[4].forEach((ramusage) => {
            totalrss += ramusage.rss;
            totalheap += ramusage.heapTotal;
            totalheapused += ramusage.heapUsed;
            totalexternal += ramusage.external
        })
        embed.addField(`**Total Stats**`, `\`\`\`js
Servers: ${String(totalservers).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}\nUsers: ${String(totalusers).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}\nUsers Cached: ${String(cachedusers).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}\nMembers Cached: ${String(cachedmembers).replace(/(?<=\d)(?=(\d{3})+(?!\d))/g, ',')}\nRam: ${Math.round((totalrss / 1024 / 1024 * 100) / 100)} MB (${Math.round((totalheapused / 1024 / 1024 * 100) / 100)} MB / ${Math.round((totalheap / 1024 / 1024 * 100) / 100)} MB Heap, ${Math.round((totalexternal / 1024 / 1024 * 100) / 100)} MB External)\`\`\``)
        message.client.utility.sendMessage(message.channel, embed);
    }
}