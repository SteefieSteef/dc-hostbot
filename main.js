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
    } else if (command == 'gif'){
        message.channel.send('https://bungeefield.uk/gif/');
    }
});


$(document).ready(function() {
	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 10;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
		tag: "fail",
		type: "random",
		rating: "pg-13"
	};
	// Target gif-wrap container
	const $gif_wrap = $("#gif-wrap");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		console.log(_giphy);
		// Set gif as bg image
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});

		// Start duration countdown
		// refreshRate();
	};

	// Call for new gif after duration
	// var refreshRate = () => {
	// 	// Reset set intervals
	// 	clearInterval(refresh);
	// 	refresh = setInterval(function() {
	// 		// Call Giphy API for new gif
	// 		newGif();
	// 	}, duration);
	// };

	// Call Giphy API for new gif
	newGif();
	
	
	const newGifButton = $('#new-gif');
	
	newGifButton.click(newGif)
});





client.login(process.env.token);