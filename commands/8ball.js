const Discord = require("discord.js");

exports.run = async(client, message, args) => {
var list = [
  'Bola preta!',
  "Bola branca!",
  "Você é impar.",
  "Você é par.",
  "Você perdeu.",
  "Você venceu.",
  "Seu oponente sou eu!"

];

var rand = list[Math.floor(Math.random() * list.length)];
let pergunta = args.slice(1).join(" ");
if (!pergunta) return message.channel.send(rand)

message.channel.send(rand)
}