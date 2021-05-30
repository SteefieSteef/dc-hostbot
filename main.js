const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '.';

client.once('ready', () =>{
	console.log('SteefieSteefBot is online!');
    client.user.setActivity("MX Bikes");
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'instagram'){
        message.channel.send('https://www.instagram.com/SteefieSteef/');
    }  else if (command == 'twitch'){
        message.channel.send('https://www.twitch.tv/SteefieSteef32/');
    } else if (command == 'discord'){
        message.channel.send('https://discord.gg/ABBJkp9');
    } else if (command == 'Youtube'){
        message.channel.send('https://www.youtube.com/channel/UCOTAJILcQNU6WzR-y4bxxgA');
    }
});


bot.login(process.env.token);