const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDg3Nzc2MzU5OTY0NDc1NDI4.Dnk47g.P8ZXjvKwh9rSHz9mmCt1xHUXcSY);
