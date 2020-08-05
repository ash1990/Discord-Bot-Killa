const Discord = require('discord.js'); //require Discord.js
const token = require('./token.json'); //require the tokens
const config = require('./config.json'); //require config file
const utility = require('./handlers/utility.js') //require utility file
const languages = require('./languages/language.js'); //require language file

//making the discord bot client
const client = new Discord.Client({
    messageCacheMaxSize: 5,
    messageSweepInterval: 3600,
    messageCacheLifetime: 3600,
    ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'] }
});

//exporting the client object. its reference based, not copies
module.exports.client = client;

//setting up the commands
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.config = config;
client.utility = utility;
client.languages = languages;

//require command handler & events handler
require(`./handlers/commands.js`) (client);
require(`./handlers/events.js`) (client);

//error log any uncaught exceptions
process.on('uncaughtException', function (err) {
    //send the time along with the error message 
    console.error(`(${new Date().toUTCString()}) ERROR: Uncaught Exception:`, err.message)
    //send the stack trace
    console.error(err.stack)
    //should prob exit the program here. could yolo it tho
    process.exit(1);
});

//error log any unhandled rejections
process.on('unhandledRejection', error => {
    console.error(`(${new Date().toUTCString()}) ERROR: Unhandled Rejection:`, error);
});

//log in to discord
client.login(token.token)
.catch(console.error);