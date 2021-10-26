const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    var list = [
        "Coroa",
        "Cara"
    ];

    var random = list[Math.floor(Math.random() * list.length)];
    let disputa = args.slice(1).join(' ');
    if(!disputa) return message.channel.send(random);

    message.channel.send(random);
}