const Discord = require('discord.js'); //require discord
const manager = new Discord.ShardingManager('./bot.js'); //set the starting file
const token = require('./token.json'); //get the tokens

console.log('--------------------------')
manager.spawn(2); //launch with 2 shard
manager.on('shardCreate', shard => {
    console.log(`--------------------------\nShard ${shard.id+1}/${shard.manager.totalShards} is starting up (ID: ${shard.id})`); //log when a shard has started up
});

//
//voting for the bot. prob just dont care about this stuff. you can just delete it tbh
//
const DBL = require('dblapi.js'); //get DBL's api
const dbl = new DBL(token.dbl, {webhookPort: 3000, webhookAuth: token.dbl}); //start up the webhook for voting

dbl.webhook.on('ready', hook => {
    console.log(`Voting webhook has started up at http://${hook.hostname}:${hook.port}${hook.path}`); //log when the voting webhook has started up
});

dbl.webhook.on('vote', async votedata => {
    const shard = manager.shards.find((shard) => shard.id === 0);
    shard.eval(`(${vote}).call(this, '${JSON.stringify(votedata)}')`); //send a vote event to shard 0 
});

//the vote function. dont use client, use 'this' instead of 'client'
async function vote(vote) {
    const Discord = require('discord.js'); //require discord incase you wanna use embeds and stuff. else this is uselessss
    vote = JSON.parse(votedata);
    console.log(vote);
}