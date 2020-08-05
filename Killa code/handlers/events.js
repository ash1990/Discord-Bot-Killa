const { readdirSync } = require('fs');

module.exports = (client) => {

    //check every directory within the events directory
    const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
    //for every event load it
    events.forEach((event, index) => {
        require(`../events/${events[index]}`)
    });
    //log how many events were loaded for this shard
    console.log(`Loaded ${events.length} Events for shard ${client.options.shards[0] + 1}!`)
}