const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  var list = [
    'https://imgur.com/RgfGLNk.gif',
    'https://i.imgur.com/r9aU2xv.gif',
    'https://i.imgur.com/wOmoeF8.gif',
    'https://i.imgur.com/nrdYNtL.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) {
    message.channel.send(`:x: | ${message.author} Mencione alguém para abraçar!`);
  }else {
    let hug = new Discord.MessageEmbed()
    .setTitle(`🤗 Abraço ✨`)
    .setDescription(`💓 ${message.author} abraçou ${pessoa}!`)
    .setImage(rand)
    .setTimestamp()
    .setColor("YELLOW")
    .setThumbnail(message.author.displayAvatarURL({format:"png"}))
    .setFooter(``, message.author.displayAvatarURL({format:"png"}));
  
    message.channel.send(hug)  
    }
  }