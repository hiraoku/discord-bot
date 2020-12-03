const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('xodbot is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'cosmo'){
        message.channel.send('admin abuser');
    }
    if(command === 'xod'){
        message.channel.send('dad');
    }
    if(command === 'xelo'){
        message.channel.send('cool epic awesome guy :pray:');
    }
    if(command === 'krypto'){
        message.channel.send('is good at skateboarding!111!!');
    }
    if(command === 'buni'){
        message.channel.send('pain.');
    }
    if(command === 'clouded'){
        message.channel.send('qt');
    }
    if(command === 'nev'){
        message.channel.send('booster?');
    }
    if(command === 'nev'){
        message.channel.send('booster?');
    }
    if(command === 'zenith'){
        message.channel.send('ape monkey!!!');
    }
    if(command === 'asthma'){
        message.channel.send('pedo');
    }
});
