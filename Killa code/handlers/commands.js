const { readdirSync } = require('fs');

module.exports = (client) => {
    let totalcommands = 0;
    //check every directory within the commands directory
    readdirSync('./commands/').forEach((dir) => {
        //read every js file within the sub directories of /commands
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        //load every command
        for (let file of commands) {
            //load the file
            let command = require(`../commands/${dir}/${file}`)
            //check if the name is defined
            if (command.name) {
                //set the function with the name command.name to the command
                client.commands.set(command.name, command);
            } else {
                //skip if it doesnt have a command name
                continue;
            }
            //if it has any aliases
            if (command.aliases) {
                //set each of the aliases for the command
                command.aliases.forEach((alias) => {
                    client.aliases.set(alias, command.name);
                });
            };
        };
        totalcommands += commands.length;
    });
    //log how many commands were loaded for this shard
    console.log(`Loaded ${totalcommands} Commands for shard ${client.options.shards[0] + 1}!`)
};