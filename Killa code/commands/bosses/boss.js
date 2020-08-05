const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "boss",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        switch(args.join(" ")) {
            case 'reshala':
                const Reshala = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Reshala aka "Dealmaker"', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Reshala') //Page of source
                    .setDescription(
                        "**Spawn map:** Customs \n" +
                        "**Health:** 740HP \n" +
                        "**Guards health:** 590HP \n" +
                        "**Spawn chance:** 35% \n" +
                        "\n"+
                        "**Behavior:** \n" + 
                        "He will normally try to stay at the back of the fight and hidden from the player's view. Additionally, he never wears armor. Be careful as a player scav because Reshala and his guards are hostile to them if you get too close and will attack without provocation. \n " + 
                        "\n"+
                        "**Followers:** \n" + 
                        "Following Reshala around are 4 heavily armed guards. These guards will typically carry modded AK's loaded with various ammo types including tracer ammunition, tier 2-6 Armor vests, and tier 3-5 helmets that sometimes have visors. Unlike regular scavs, these guards are highly aggressive and will frequently push towards the player instead of taking cover. The followers all have the last name Zavodskoy. \n " + 
                        "\n"+
                        "**Strategy:** \n" + 
                        "To kill Reshala first, the best tactic is to find him before being seen. He can be easily identified by his brown sweater, unlike his followers who wear blue jackets with white striped cuffs. After being spotted he will run behind his guards, forcing you to kill them first. Before spending time looting Reshala or his guards it's recommended that you kill all five of them as they will usually stay within close proximity to each other and will kill you while looting. The guards are very aggressive compared to normal scavs and will rush the player. When facing these guards be aware of their positions so you do not get caught off guard when they run up to you. Because the guards are frequently in close proximity to each other grenades can be highly effective at stunning or killing multiple of them at once, especially indoors. Be aware that they also have grenades and will throw both flashbangs and fragmentation grenades at you, even when you're out of their line of sight and hidden behind cover."
                        )
                    .setThumbnail("https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/1a/Dealmaker_Portrait.png/274px-Dealmaker_Portrait.png")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/eb/Customs_Dealmaker_Haunt.png')
                message.channel.send(Reshala);
            break;

            case 'killa':
                const killa = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Killa', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Killa') //Page of source
                    .setDescription(
                        "**Spawn map:** Interchange \n" +
                        "**Health:** 830HP \n" +
                        "**Guards health:** n/a \n" +
                        "**Spawn chance:** 35% \n" +
                        "\n"+
                        "**Followers:** \n" + 
                        "None\n " + 
                        "\n"+
                        "**Behavior:** \n" + 
                        "Killa uses a light machine gun or other automatic weapon to suppress the enemy, while lurking from cover to cover, getting closer to his target for the final push. During the assault he moves in a zig-zag pattern, uses smoke and fragmentation grenades, and relentlessly suppresses enemies with automatic fire. He will follow his target large distances out of his patrol route, so be sure to run very far to get away from him if he has locked onto you.\n " + 
                        "\n"+
                        "**Strategy:** \n" + 
                        "It is recommended to avoid being spotted by Killa. He has multiple grenades and is generally accurate with his bursts. If you are close to him he will continuously push the player and relentlessly hunt them until he ambushes and assaults them. It is best to attack him with high-penetration ammunition such as 5.45 BS, 5.56 M995, or 7.62x51. Without proper ammunition to kill him, shredding his 6B13 M to low durability or firing solely at his legs are both appropriate, albeit more risky, strategies. Grenades generally won't work to kill him, as he is a highly mobile fighter and will rarely be pinned down long enough for a grenade to stop him. If fighting him with a teammate, attacking him from two different directions and peeking cover is a sound strategy, as he will continue to suppress one of his opponents while the other can safely return fire. \n \n Having high capacity magazines can help as Killa is unable to fire back temporarily if shot first. This effectively stun-locks him while he's under constant fire where he will be unable to shoot. The only exception is when he does a \"power slide\" which grants him invulnerability against stun-locking for a short period during and after the slide allowing him to fire back."
                        )
                    .setThumbnail("https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/a/ac/Killa_Portrait.png/319px-Killa_Portrait.png")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d9/InterchangeKillaPath.jpg')
                message.channel.send(killa);
            break;

            case 'gluhar':
                const gluhar = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Gluhar', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Gluhar') //Page of source
                    .setDescription(
                        "**Spawn map:** Reserve \n" +
                        "**Health:** 990HP \n" +
                        "**Guards health:** n/a \n" +
                        "**Spawn chance:** 41% \n" +
                        "\n"+
                        "**Followers:** \n" + 
                        "Gluhar has up to 6 followers with a wide assortment of weapons and gear. \n The Guards have a wide variety of weapons, usually Assault rifles that are usually loaded with tracer ammunition, primary or back up Shotguns, an occasional Designated marksman rifle, and primary or backup Submachine guns. They typically have high-grade Armor vests, and tier 3-5 helmets that sometimes have visors. \n All the guards' names are one-word nicknames, similar to Scav Raiders. \n " + 
                        "\n"+
                        "**Behavior:** \n" + 
                        "Gluhar and his many guards are extremely hostile. It's very unlikely to find success while fighting in any open areas. Small hallways and closed rooms are preferable. \n As for Gluhar, because of his high chest health he can withstand high damage bullets that would otherwise instantly kill other enemies. The only effective means of killing Gluhar quickly are head shots. Gluhar's ASh-12 12.7x55 assault rifle will kill most targets almost instantly. \n Gluhar and his guards are very accurate. \n " + 
                        "\n"+
                        "**Strategy:** \n" + 
                        "The best way to kill Gluhar quickly is to get in close and make him your first target. He can be distinguished by his black T-shirt with grey pants and, at most, a light plate carrier, compared to his Guards who wear assorted types of camouflaged clothing and heavy armor. Upon seeing the player, the guards will attempt to either circle Gluhar to protect him or overwhelm the player(s) with force. \n \n The Guards often push the player(s) in pairs or try to perform flanking maneuvers, however, they typically try to stay in a close radius of each other to provide support. Additionally, one-two guards stay back with the Boss, unless the Boss has already been killed, in which case they will seek out nearby players. Due to their ability to push players hard and fast while having a base of accurate covering fire, it is recommended to engage the Guards as close as possible."
                        )
                    .setThumbnail("https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/44/Gluhar_Portrait.PNG/320px-Gluhar_Portrait.PNG")
                    .setImage('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/62/Gluhar_Spawn_Locations.png/756px-Gluhar_Spawn_Locations.png')
                message.channel.send(gluhar);
            break;

            case 'shturman':
                const shturman = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('Shturman', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Gluhar') //Page of source
                    .setDescription(
                        "**Spawn map:** Woods \n" +
                        "**Health:** 792HP \n" +
                        "**Guards health:** 740HP \n" +
                        "**Spawn chance:** 35% \n" +
                        "\n"+
                        "**Followers:** \n" + 
                        "Shturman always has two followers, each with high caliber weapons, and have deadly accuracy. \n Their weapons alternate between various semi-automatic rifles and an occasional VSS, and also have class 3 -> class 6 Armor vests. Each rifle is loaded with ammo that is ideal for shredding all types of armor, so one should beware of staying out in the open for too long. \n All of the followers' last name is Svetloozerskiy, similar to the Reshala Guards \n " + 
                        "\n"+
                        "**Behavior:** \n" + 
                        "Shturman and his two followers will engage the player at a long range protecting the sawmill area of the woods. They prefer to keep their distance, as they are not suited for close quarters combat. They also like to take positions between hard cover, or camouflage themselves with the environment. Additionally, it is not unheard of for one of the guards to flank the player(s) while Shturman and the other guard hold positions and keep the player(s) pinned down. \n " + 
                        "\n"+
                        "**Strategy:** \n" + 
                        "It is recommended that the player(s) take the initiative when engaging the Scav Boss. As the boss and his guards are often spread out, it is best to first recon the area and figure out where they are, then eliminate one of them, preferably the boss, with a single, well-placed headshot. As neither the boss nor his guards wear helmets, headshots are the best way to go, given that guards are often decently armored and the boss has high chest health. \n Unless one is confident in their abilities, it is highly recommended to not engage in long-range combat, as the Scav Boss and his guards are equipped for this exact purpose and snipe with deadly accuracy. As such, it is recommend to close the distance as much as possible, especially given that the Scav Boss and his guards have semi-automatic weapons, and, on occasion, bolt action Mosins. However, the guards do utilize grenades, so one should be as careful as possible when moving up."
                        )
                    .setThumbnail("https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/3f/Shturman_Portrait.png/320px-Shturman_Portrait.png")
                    .setImage('https://i.imgur.com/0MclkrC.jpg')
                message.channel.send(shturman);
            break;

            default:
                const maps = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('All bosses', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/Characters') //Page of source
                    .setDescription("Use the following boss names with \"Killa boss\" infront")
                    .setImage('https://i.imgur.com/WbVXFju.png')
                message.channel.send(maps);
            break;
        }
    }
}