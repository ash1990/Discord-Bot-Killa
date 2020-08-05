const { Discord, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ammo",
    aliases: [],
    guildOnly: false,
    requiredPerms: [],
    run: async(message, args) => {
        let arg = args.join(" ");
        let sortby = "none"
        if (arg.includes(" -dmg")) {
            sortby = "dmg";
            arg = arg.replace(" -dmg", "");
        }
        if (arg.includes(" -pen")) {
            sortby = "pen";
            arg = arg.replace(" -pen", "");
        }
        switch(arg) {
            case '12.7x55':
            case '12.7x55mm':
            case 'sts-130':
            case 'sts':
                const embed1 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('12.7x55mm STs-130', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/12.7x55mm_STs-130') //Page of source
                    .setDescription(
                        "**Assault rifles**\n" +
                        "ASh-12\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                if(sortby === "dmg"){ 
                    embed1.setImage("https://i.imgur.com/aT58Nkc.png"); 
                    embed1.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/7a/12.7x55_PS12A_icon.png')
                }
                if(sortby === "pen"){
                    embed1.setImage("https://i.imgur.com/B8nLtUH.png"); 
                    embed1.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/fb/12.7x55_PS12B_icon.png')
                }
                if(sortby === "none"){
                    embed1.setImage("https://i.imgur.com/B8nLtUH.png"); 
                    embed1.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/fb/12.7x55_PS12B_icon.png')
                }
                message.channel.send(embed1);
            break;

            case '9x39':
            case '9x39mm':
                const embed3 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('9x39mm', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/9x39mm') //Page of source
                    .setDescription(
                        "**Assault carbines:**\n" +
                        "AS VAL\n" +
                        "\n" +
                        "**Designated marksman rifles**\n" +
                        "VSS Vintorez\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed3.setImage("https://imgur.com/OCP2SgG.png")
                        embed3.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b8/SP5ICON.png')
                    }
                    if(sortby === "pen"){
                        embed3.setImage("https://imgur.com/cOY4aUi.png")
                        embed3.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/76/7n12icon.png')
                    }
                    if(sortby === "none"){
                        embed3.setImage('https://imgur.com/cOY4aUi.png')
                        embed3.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/76/7n12icon.png')
                    }
                message.channel.send(embed3);
            break;

            case '9x21':
            case '9x21mm':
            case 'gyurza':
                const embed4 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('9x21mm Gyurza', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/9x21mm_Gyurza') //Page of source
                    .setDescription(
                        "**Pistols:**\n" +
                        "SR-1MP Gyurza\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed4.setImage("https://i.imgur.com/xIaG8gG.png")
                        embed4.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/1/1c/9x21sp12.png')
                    }
                    if(sortby === "pen"){
                        embed4.setImage("https://i.imgur.com/eElTAY7.png")
                        embed4.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/79/9x21sp13.png')
                    }
                    if(sortby === "none"){
                        embed4.setImage('https://i.imgur.com/eElTAY7.png')
                        embed4.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/7/79/9x21sp13.png')
                    }
                message.channel.send(embed4);
            break;

            case '9x19':
            case '9x19mm':
            case 'parabellum':
                const embed5 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('9x19mm Parabellum', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/9x19mm_Parabellum') //Page of source
                    .setDescription(
                        "**Pistols:**\n" +
                        "Glock17, Glock18C, M9A3, MP-443 \"Granch\", P226R\n" +
                        "\n" +
                        "**Submachine guns:**\n" +
                        "MP5, MP5K-N, MP9, MP9-N, MPX, PP-19-01 Vityaz-SN, Saiga-9\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed5.setImage("https://imgur.com/LPznx7p.png")
                        embed5.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/97/9x19ripicon.png')
                    }
                    if(sortby === "pen"){
                        embed5.setImage("https://imgur.com/X3IGCzN.png")
                        embed5.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c6/9x19ap.png')
                    }
                    if(sortby === "none"){
                        embed5.setImage('https://imgur.com/X3IGCzN.png')
                        embed5.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c6/9x19ap.png')
                    }
                message.channel.send(embed5);
            break;

            case '9x18':
            case '9x18mm':
            case 'makarov':
                const embed6 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('9x18mm Makarov', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/9x18mm_Makarov') //Page of source
                    .setDescription(
                        "**Pistols:**\n" +
                        "PB pistol, PM(t) pistol, PM pistol, APB, APS\n" +
                        "\n" +
                        "**Submachine guns:**\n" +
                        "PP-91 \"Kedr\", PP91-01 \"Kedr-B\", PP-9 \"Klin\" \n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed6.setImage("https://imgur.com/CfAyJ1r.png")
                        embed6.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/59/9x18SP7GZH.png')
                    }
                    if(sortby === "pen"){
                        embed6.setImage("https://imgur.com/z3BKD1G.png")
                        embed6.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5d/9x18PBM.png')
                    }
                    if(sortby === "none"){
                        embed6.setImage('https://imgur.com/z3BKD1G.png')
                        embed6.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/5d/9x18PBM.png')
                    }
                message.channel.send(embed6);
            break;

            case '7.62x54':
            case '7.62x54mmR':
            case '7.62x54R':
            case '7x54':
            case 'mmr':
                const embed7 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('7.62x54mmR', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/7.62x54mmR') //Page of source
                    .setDescription(
                        "**Designated marksman rifles**\n" +
                        "SVDS\n" +
                        "\n" +
                        "**Sniper rifles**\n" +
                        "Mosin, Mosin inf, SV-98\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed7.setImage("https://i.imgur.com/xNr5wf9.png")
                        embed7.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/33/7N1ICON.png')
                    }
                    if(sortby === "pen"){
                        embed7.setImage("https://i.imgur.com/0QC4K87.png")
                        embed7.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d0/7N37_ICON.png')
                    }
                    if(sortby === "none"){
                        embed7.setImage('https://i.imgur.com/0QC4K87.png')
                        embed7.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d0/7N37_ICON.png')
                    }
                message.channel.send(embed7);
            break;

            case '7.62x51':
            case '7.62x51mm':
            case '7x51':
            case '51nato':
            case '51 nato':
                const embed8 = new MessageEmbed()
                .setColor(0xfdfdfd)
                .setAuthor('7.62x51mm NATO', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/7.62x51mm_NATO') //Page of source
                .setDescription(
                    "**Assault carbines:**\n" +
                    "Vepr Hunter/VPO-101\n"+
                    "\n" +
                    "**Assault rifles:**\n" +
                    "SA-58, DT MDR .308\n"+
                    "\n" +
                    "**Designated marksman rifles:**\n" +
                    "M1A, RSASS, SR-25\n"+
                    "\n" +
                    "**Sniper rifles:**\n" +
                    "DVL-10, M700, Orsis T-5000\n"+
                    "\n" +
                    "**Default is sorted by Penetration Power**\n" +
                    "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                )
                if(sortby === "dmg"){ 
                    embed8.setImage("https://i.imgur.com/R71V4Zn.png")
                    embed8.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/33/7N1ICON.png')
                }
                if(sortby === "pen"){
                    embed8.setImage("https://i.imgur.com/fHH5zkw.png")
                    embed8.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e3/M61ICON.png')
                }
                if(sortby === "none"){
                    embed8.setImage('https://i.imgur.com/fHH5zkw.png')
                    embed8.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e3/M61ICON.png')
                }
            message.channel.send(embed8);
            break;

            case '7.62x39':
            case '7.62x39mm':
            case '7x39':
                const embed9 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('7.62x39mm', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/7.62x39mm') //Page of source
                    .setDescription(
                        "**Assault rifles:**\n" +
                        "AK-103, AK-104, AKM, AKMN, AKMS, AKMSN, Vepr KM/VPO-136\n" +
                        "\n" +
                        "**Assault carbines**\n" +
                        "OP-SKS, SKS\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed9.setImage("https://i.imgur.com/EtoWvXE.png")
                        embed9.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d8/7.62x39HP.png')
                    }
                    if(sortby === "pen"){
                        embed9.setImage("https://i.imgur.com/aw8mVkg.png")
                        embed9.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/4a/7.62x39BP.png')
                    }
                    if(sortby === "none"){
                        embed9.setImage('https://i.imgur.com/aw8mVkg.png')
                        embed9.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/4/4a/7.62x39BP.png')
                    }
                message.channel.send(embed9);
            break;

            case '7.62x25':
            case '7.62x25mm':
            case '7x25':
            case 'tokarev':
                const embed10 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('7.62x25mm Tokarev', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/7.62x25mm_Tokarev') //Page of source
                    .setDescription(
                        "**Pistols:**\n" +
                        "TT Pistol, TT Pistol (gold)\n"+
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed10.setImage("https://i.imgur.com/4AtULyh.png")
                        embed10.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d8/7.62x39HP.png')
                    }
                    if(sortby === "pen"){
                        embed10.setImage("https://i.imgur.com/rN5sdws.png")
                        embed10.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d4/TTLRNPC.png')
                    }
                    if(sortby === "none"){
                        embed10.setImage('https://i.imgur.com/rN5sdws.png')
                        embed10.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/d/d4/TTLRNPC.png')
                    }
                message.channel.send(embed10);
            break;

            case '5.56x45':
            case '5.56x45mm':
            case '5x45':
            case '45nato':
            case '45 nato':
                const embed11 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('5.56x45mm NATO', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/5.56x45mm_NATO') //Page of source
                    .setDescription(
                        "**Assault rifles**\n" +
                        "ADAR 2-15, AK-101, AK-102, DT MDR, HK416A5, M4A1, TX-15 DML\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed11.setImage("https://imgur.com/XuhZXE1.png")
                        embed11.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/39/556warmageicon.png')
                    }
                    if(sortby === "pen"){
                        embed11.setImage("https://imgur.com/zreowaF.png")
                        embed11.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b6/M995ICON.png')
                    }
                    if(sortby === "none"){
                        embed11.setImage('https://imgur.com/zreowaF.png')
                        embed11.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/b/b6/M995ICON.png')
                    }
                message.channel.send(embed11);
            break;

            case '5.45x39':
            case '5.45x39mm':
            case '5x39':
                const embed12 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('5.45x39mm', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/5.45x39mm') //Page of source
                    .setDescription(
                        "**Assault rifles**\n" +
                        "AK-105, AK-74, AK-74M, AKS-74, AKS-74N, AKS-74U, AKS-74UN, AKS-74UB\n" +
                        "\n" +
                        "**Light machine guns**\n" +
                        "RPK-16\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed12.setImage("https://i.imgur.com/zeolXzb.png")
                        embed12.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/f/fe/74HPICON.png')
                    }
                    if(sortby === "pen"){
                        embed12.setImage("https://i.imgur.com/1D1fwRy.png")
                        embed12.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/64/7n39icon.png')
                    }
                    if(sortby === "none"){
                        embed12.setImage('https://i.imgur.com/1D1fwRy.png')
                        embed12.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/64/7n39icon.png')
                    }
                message.channel.send(embed12);
            break;

            case '5.7x28':
            case '5.7x28mm':
            case '5x7':
            case 'fn':
                const embed13 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('5.7X28mm FN', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/5.7x28mm_FN') //Page of source
                    .setDescription(
                        "**Pistols**\n" +
                        "FN 5-7\n" +
                        "\n" +
                        "**Submachine guns**\n" +
                        "P90\n" +
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed13.setImage("https://i.imgur.com/ZKmE8gO.png")
                        embed13.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/6f/R37F_icon.png')
                    }
                    if(sortby === "pen"){
                        embed13.setImage("https://i.imgur.com/InX5LQ9.png")
                        embed13.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e5/57x28mmSB193Icon.png')
                    }
                    if(sortby === "none"){
                        embed13.setImage('https://i.imgur.com/InX5LQ9.png')
                        embed13.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e5/57x28mmSB193Icon.png')
                    }
                message.channel.send(embed13);
            break;

            case '4.6x30':
            case '4.6x30mm':
            case '4x30':
            case 'hk':
                const embed14 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('4.6x30mm HK', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/4.6x30mm_HK') //Page of source
                    .setDescription(
                        "**Submachine guns:**\n" +
                        "MP7A1, MP7A2\n"+
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed14.setImage("https://imgur.com/3oFEUIx.png")
                        embed14.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/58/4.6x30ActionIcon.png')
                    }
                    if(sortby === "pen"){
                        embed14.setImage("https://imgur.com/VziqCch.png")
                        embed14.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/cf/4.6x30APenIcon.png')
                    }
                    if(sortby === "none"){
                        embed14.setImage('https://imgur.com/VziqCch.png')
                        embed14.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/cf/4.6x30APenIcon.png')
                    }
                message.channel.send(embed14);
            break;

            case '.366':
            case '.366 tkm':
            case '366':
            case 'tkm':
                const embed15 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('.366 TKM', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/.366_TKM') //Page of source
                    .setDescription(
                        "**Assault rifles:**\n" +
                        "Vepr AKM/VPO-209\n"+
                        "\n" +
                        "**Sniper rifles:**\n" +
                        "VPO-215\n"+
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed15.setImage("https://imgur.com/0INoGdC.png")
                        embed15.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/e/e9/GEKSAICON.png')
                    }
                    if(sortby === "pen"){
                        embed15.setImage("https://imgur.com/cWoNKeq.png")
                        embed15.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/95/EKOICON.png')
                    }
                    if(sortby === "none"){
                        embed15.setImage('https://imgur.com/cWoNKeq.png')
                        embed15.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/95/EKOICON.png')
                    }
                message.channel.send(embed15);
            break;

            case '20x70mm':
            case '20x70':
                const embed16 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('20x70mm', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/20x70mm') //Page of source
                    .setDescription(
                        "**Shotguns:**\n" +
                        "TOZ-106\n"+
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed16.setImage("https://i.imgur.com/dsnFZlk.png")
                        embed16.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3e/20x70BUCKSHOT_56.png')
                    }
                    if(sortby === "pen"){
                        embed16.setImage("https://i.imgur.com/7gZb74A.png")
                        embed16.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/67/70x20SLUG_poleva6u-icon.png')
                    }
                    if(sortby === "none"){
                        embed16.setImage('https://i.imgur.com/7gZb74A.png')
                        embed16.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/67/70x20SLUG_poleva6u-icon.png')
                    }
                message.channel.send(embed16);
            break;

            case '12x70mm':
            case '12x70':
                const embed17 = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('12x70mm', 'https://i.imgur.com/bDFrogC.png', 'https://escapefromtarkov.gamepedia.com/12x70mm') //Page of source
                    .setDescription(
                        "**Shotguns:**\n" +
                        "M870, MP-133, MP-155, Saiga-12\n"+
                        "\n" +
                        "**Default is sorted by Penetration Power**\n" +
                        "__Gold: Most Pen Power__　　　　__Blue: Most damage__"
                    )
                    if(sortby === "dmg"){ 
                        embed17.setImage("https://i.imgur.com/Y7q31Yv.png")
                        embed17.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/6d/127065ExpressMagnumIcon.png')
                    }
                    if(sortby === "pen"){
                        embed17.setImage("https://i.imgur.com/XrVaLCY.png")
                        embed17.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3e/12-70_AP-20_icon.png')
                    }
                    if(sortby === "none"){
                        embed17.setImage('https://i.imgur.com/XrVaLCY.png')
                        embed17.setThumbnail('https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/3/3e/12-70_AP-20_icon.png')
                    }
                message.channel.send(embed17);
            break;

            default:
                const embed = new MessageEmbed()
                    .setColor(0xfdfdfd)
                    .setAuthor('All ammo types', 'https://i.imgur.com/bDFrogC.png', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRUaz6ASyHUQoOXDuyxQwleX8fqAroR_jGRvsa5vbMkQkjroMgqfIMZnc7N0s4iJA/pubhtml') //Page of source
                    .setDescription(
                        "Use the following commands with \`Killa ammo\` infront, you can also sort by typing **-dmg** or **-pen** at the end." +
                        "\n" +
                        "\n Example: \`Killa ammo 9x39 -dmg\`"
                    )
                    .setImage('https://i.imgur.com/62i0SeN.png')
                message.channel.send(embed);
            break;
        }
    }
}