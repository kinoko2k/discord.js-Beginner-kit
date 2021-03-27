const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'TOKEN';

client.on("message", message => {
  if (message.content === "!embed" && message.guild) {
  message.channel.send({
          embed: {
            title: 'タイトル',
            description:
              "説明",
            color: 7506394,
            timestamp: new Date(),
            footer: {
              icon_url: message.guild.icon_url,
              text: "Created by kinoko_2k"
            },
            thumbnail: message.guild.icon,
            fields: [
              {
                name: "小題名1",
                value: "文1"
              },
              {
                name: "小題名2",
                value: "文2"
              },
              {
                name: "小題名3",
                value: "文3"
              }
            ]
          }
});
}
});  

client.login(token);
