const Discord = require('discord.js'); //require Discord.js
const token = require('../token.json'); //require the tokens
const fetch = require('node-fetch'); //require fetch for APIs

const cooldowns = {};

const index = require('../bot.js');
const client = index.client;
const database = client.database;

client.on('message', async message => {
    if (message.author.bot) return; //ignore other bots so we don't get bots triggering eachother

    //small little cooldown of 600ms to prevent absolute spam hell. just ignores their message if a cooldown was set from executing a command.
    if (cooldowns[message.author.id]) {
        if (new Date().getTime() - cooldowns[message.author.id] < 600) return; 
    }

    //get which prefix was used
    let usedprefix;
    if (message.content.toLowerCase().startsWith(client.config.prefix.toLowerCase())) {
        usedprefix = client.config.prefix;
    } else if (message.content.toLowerCase().startsWith(client.config.altprefix.toLowerCase())) {
        usedprefix = client.config.altprefix;
    }
    //return if not a prefix of the bot
    if (!usedprefix) return

    //get the arguments
    let args = message.content.slice(usedprefix.length).trim().split(" "); //get the message - the prefix split by "" so you have a nice array of things said
    const cmd = args.shift().toLowerCase(); //get the command as lowercase
    
    //if theres no command return
    if (!cmd) return;
    //get the command by name or alias or return if not found
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!command) return;
    args = args.filter(a => !(a === '' || a === ' '));

    //if the command is server only and it isnt in a server return
    if (command.guildOnly && !message.guild) {
        client.utility.sendMessage(message.channel, `Whoops! The \`${command.name}\` command can only be used in servers.`)
        return;
    }
    //place whichever commands you dont want the arguments edited from in here. all other commands get turned to lowercase and trimmed. makes it easier to handle them.
    //basically if people did like ${prefix} command ArG itd be the same as ${prefix} command arg. so you can just handle everything as if its lowercase
    if (!["welcomeimages", "welcomemessage", "disboardmessage", "reactionrole"].includes(command.name) && args) {
        args.forEach((arg, index) => {
            args[index] = arg.toLowerCase().trim(); //remove extra spaces before and after arguments
        })
    }
    //if they added () [] or {} around their arguments like idiots. disable this for certain commands by putting their name between the brackets
    if (!["welcomemessage"].includes(command.name) && args) {
        let changed;
        args.forEach((arg, index) => {
            if (['(', '[', '{'].includes(arg.charAt(0))) {
                switch (arg.charAt(0)) {
                    case '(':
                        if (arg.charAt(arg.length-1) === ')') args[index] = arg.substring(1, arg.length-1);
                        changed = true;
                        break;
                    case '[':
                        if (arg.charAt(arg.length-1) === ']') args[index] = arg.substring(1, arg.length-1);
                        changed = true;
                        break;
                    case '{':
                        if (arg.charAt(arg.length-1) === '}') args[index] = arg.substring(1, arg.length-1);
                        changed = true;
                        break;
                    default:
                        break;
                }
            }
        })
        if (changed) { //if they added () [] or {} to their arguments get mad at them and tell them not to do that :reeee:
            client.utility.sendMessage(message.channel, 'Hey you blin! You\'re not supposed to actually include the () {} & [] in commands! They\'re there to show you what you need to fill in yourself.')
                .then(m => m.delete(5000)); //delete the message 5s later
        }
    }

    //check if theyre missing any permissions to run the command
    if (message.guild && command.requiredPerms && !message.member.hasPermission('ADMINISTRATOR')) {
        const missing = message.member.permissions.missing(command.requiredPerms);
        if (missing && !missing.length <= 0) {
            client.utility.sendMessage(`You don't have the required permissions needed to execute this command. You need the ${missing.length > 1 ? 'permissions' : 'permission'} for **${missing.join(', ')}**`).then((m) => {
                m.delete(5000); //delete the error msg
                message.delete(5000); //delete the command msg
            });
            return;
        }
    }
    
    //check if the bot itself is missing any permissions to run the command
    if (message.guild && command.requiredPerms && !message.guild.me.hasPermission('ADMINISTRATOR')) {
        const missing = message.guild.me.permissions.missing(command.requiredPerms);
        if (missing && !missing.length <= 0) {
            client.utility.sendMessage(message.channel, `I don't have the required permissions needed to execute this command. I need access to the ${missing.length > 1 ? 'permissions' : 'permission'} **${missing.join(', ')}**. Alternatively you could give me Administrator permissions.`);
        }
    }

    let language = 'english';
    //finally run the fucking command
    const starttime = new Date().getTime();
    try {
        cooldowns[message.author.id] = new Date().getTime();
        await command.run(message, args, language);
    } catch (err) {
        client.utility.sendMessage(message.channel, `Cyka, Seems like I ran into an error. If this happens again dm @VirtualBytes_ on twitter! \`Killa help\``)
        console.log("Error?" + err + "\n" + err.stack)
    }
    const endtime = new Date().getTime();

    //log the command and how long it took to completely run it.
    console.log(`(${new Date().toUTCString()}) Took ${endtime - starttime} ms to execute: ${command.name} ${args.join(" ")}`)

    //possibly help garbage collector a tiny bit by making sure message doesn't point at anything
    message = null; 
});