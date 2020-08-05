const fetch = require("node-fetch");
const fs = require('fs');



module.exports = {
    name: "update420691337",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
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

        
        fs.writeFile("D:/Michael/Documents/- Files/Killa/commands/items/items-eft.json", JSON.stringify(itemseng, 4), err => {
            if (err) {
              // handle errors here
              throw err;
            }
            console.log('English updated');
        });

        fs.writeFile("D:/Michael/Documents/- Files/Killa/commands/items-ru/items-eft-ru.json", JSON.stringify(itemsru, 4), err => {
            if (err) {
              // handle errors here
              throw err;
            }
            console.log('Russian updated');
        });
    }
}
