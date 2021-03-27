const Discord = require('discord.js') //npm install discord.js
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
})

client.login('TOKEN(見せちゃいけないやつ)')
