const index = require('../bot.js');
const client = index.client;

client.on('guildCreate', async guild => {
    await guild.members.fetch();
    const botCount = guild.members.filter((m) => m.user.bot);
   if (botCount.size > 50) {
       if (!['264445053596991498', '446425626988249089', '450100127256936458', '454933217666007052', '110373943822540800', '374071874222686211', '439866052684283905', '431438368522371082', '387812458661937152', '396440418507816960', '523523486719803403', '330777295952543744', '596854473167470594', '568567800910839811', '662047241803923494', '374074135506190349'].includes(guild.id)) {
           console.log(`${guild.id} | ${guild.name} | Members: ${guild.memberCount} | Bots: ${botCount.size}\nLeaving this server because the bot count is above 30. Likely bot spam.`);
           guild.leave();
           return;
       }
   }
});