const { readdirSync } = require('fs');

const languages = {};

//check every directory within the languages directory
const files = readdirSync(`./languages/`).filter(file => file.endsWith('.json'));
//for every language load it and save it
for (let file in files) {
    const language = require(`./${files[file]}`)
    languages[files[file].replace('.json', '')] = language;
}
//export the languages json object
module.exports = languages;