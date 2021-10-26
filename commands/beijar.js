const Discord = require('discord.js')
const db = require('quick.db') 

exports.run = async (bot, message, args) => {

   var list = [
     'https://i.imgur.com/YbNv10F.gif',
     'https://i.imgur.com/IgGumrf.gif'
];
    var list1 = [
     'https://i.imgur.com/8LKPbOf.gif',
     'https://i.imgur.com/wQjUdnZ.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

    
    if(!user) {
        return message.channel.send(`${message.author} você tem que mencionar um membro para beijar!`)
    }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#F44887')
      .setDescription(`😚 **${message.author.username} roubou um beijo de ${user.username}!**`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!', bot.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#F44887')
      .setDescription(`😘 **${user.username} retribuiu o beijo de ${message.author.username}!**`, avatar1)
      .setFooter('Beijinho 😳', user.displayAvatarURL())
      .setImage(rand1)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   });
}