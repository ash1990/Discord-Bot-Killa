const Discord = require('discord.js'); //require Discord.js
const token = require('../token.json'); //require the tokens
const fetch = require('node-fetch'); //require fetch for APIs
const fs = require('fs');

const index = require('../bot.js');
const client = index.client;
const database = client.database;

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on('ready', async () => {
    console.log(`Bot has started up Shard ${client.options.shards[0]+1}/${client.options.shardCount} and is online now!`);

    //change the bot's status every 15 seconds (presence/activity)
    let status = 0;
    //check ram usage
    setInterval(async () => {
        console.log(`${Math.floor(process.memoryUsage().rss/1024/1024*10)/10} MB used for shard ${client.shard.ids[0]+1}`)
    }, 60000);

    setInterval(() => {
        client.users.cache.sweep((u) => {
            return (u.id !== client.user.id);
        })
        client.guilds.cache.forEach((guild) => {
            guild.members.cache.sweep((member) => {
                return (member.user.id !== client.user.id)
            })
            guild.presences.cache.sweep(() => true)
        })
    }, 3600e3);

    setInterval(async () => {
        if (status === 0) {
            //set the status to the next one
            status = 1;
            //change the activity
            client.user.setActivity(`!предмет [название предмета] | !k help | ${client.config.version}`, {
                type: 'LISTENING'
            }).catch(console.error);
        } else if (status === 1) {
            //set the status to the next one
            status = 2;
            //make promises to call up amount of guilds and members globally (so of all shards)
            const promises = [
                client.shard.fetchClientValues('guilds.cache.size'),
                client.shard.broadcastEval(`this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)`)
            ];
            //await both promises at the same time
            let results = await Promise.all(promises);
            //count up the total servers & users from the array
            let totalservers = results[0].reduce((prev, data) => prev + data);
            let totalusers = results[1].reduce((prev, data) => prev + data);
            //set the activity to the servers and users
            client.user.setActivity(totalusers + ' users & ' + totalservers + ' servers! | \"!k invite\" ', {
                type: 'LISTENING'
            }).catch(console.error);
        } else {
            //set the status to the next one
            status = 0;
            //update status to show amount of commands
            client.user.setActivity(`!k patreon`, {
                type: 'LISTENING'
            }).catch(console.error);
        }
    }, 15000)

    async function updateitems() {
        
        const englishjson = await fetch(`https://tarkov-market.com/api/v1/items/all?x-api-key=hZVfRHozydqKngHn`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const itemseng = await englishjson.json();

        const russianjson = await fetch(`https://tarkov-market.com/api/v1/items/all?x-api-key=hZVfRHozydqKngHn&lang=ru`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const itemsru = await russianjson.json();

        
        fs.writeFile("/home/pi/Killa/commands/items/items-eft.json", JSON.stringify(itemseng, 4), err => {
            if (err) {
              // handle errors here
              throw err;
            }
            console.log('English updated');
        });

        fs.writeFile("/home/pi/Killa/commands/items-ru/items-eft-ru.json", JSON.stringify(itemsru, 4), err => {
            if (err) {
              // handle errors here
              throw err;
            }
            console.log('Russian updated');
        });
    }

    if (client.shard.ids[0] !== 0){
        updateitems();
    }
     
    setInterval(async() => {
        if (client.shard.ids[0] !== 0){
            updateitems();
        }
    }, 12*60*60e3);
});