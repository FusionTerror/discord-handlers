# Discord-Handlers 📖
##### *Why spend time making a event or command handler? You got discord-handlers for Discord.JS v12!*
##### 💖 ~ Support: [Fusion Terror's YouTube](https://www.youtube.com/channel/UCjTvZBc6GFbYkVs9rGWJLbA), [Fusion Terror's Patreon](https://www.patreon.com/fusionterror)
##### 🙋‍♂ ~ Help: [Discord Server](https://discord.gg/QJyTkNxVrX)
---
&nbsp;
## ✅ ~ Installation
```
npm i discord-handlers
```
&nbsp;
## 📌 ~ Command and Event files
### Handle Commands: `<discord-handlers>.commands(commandFolders, path, client)`
### Handle Discord Events: `<discord-handlers>.djsEvents(eventFiles, path, client)`
### Handle Mongo Events: `<discord-handlers>.mongoEvents(eventFiles, path, client, mongoose)`
#### The template below shows how your event files should look with 'client' already imported.
```js
// Ready Event
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) { // execute() is where you will pass in what you'd need for other events.
        console.log(`${client.user.tag} has logged into Discord.`);
    },
};
```
```js
// Message Event
module.exports = {
	name: 'message',
	async execute(message, client) {
        if (message.author.bot || !message.content.startsWith('!')) return; //! is the prefix in this case.
        const args = message.content.slice(client.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;
        try {
            command.execute(message, args, client);
        } catch (error) {
            console.log(error);
        }
	},
};
```
#### The template below shows how a command file should look with 'client' already imported. If you want to use an aliases, put "aliases: ['aliases name here']" under "name: 'command name'"
```js
// Ping Command
module.exports = {
	name: 'ping',
	async execute(message, args, client) {
		message.channel.send(`*Fetching...*`)
            .then(sentMessage => sentMessage.edit(`**Pong:**\n> Bot: \`${sentMessage.createdTimestamp - message.createdTimestamp}ms\`\n> API: \`${client.ws.ping}ms\``));
	},
};
```
```js
// Mongoose Event
module.exports = {
	name: 'connected',
	execute() {
		console.log('Connected to the Database.');
	},
};
```
&nbsp;
## 📌 ~ Functions Files
### Handle Functions: `<discord-handlers>.functions(functionFiles, path, client)`
```js
// Function File
module.exports = (client) => {
    client.functionName = async (functionParameter) => {
        //Code here.
    };
};
```
## 💡 ~ Example
```js
const DiscordHandlers = require('discord-handlers'); //Requiring Discord-Handlers module.
const Discord = require('discord.js'); //Requiring Discord.js module.
const mongoose = require('mongoose'); //Requiring Mongoose module.
const fs = require('fs'); //Requiring fs module.
const client = new Discord.Client(); //Creating and assigning the Discord.js Client constructor.

const commandFolders = fs.readdirSync('path to command folders (e.g ./commands)'); //Getting all the folders inside of your commands folder.
const djsEvents = fs.readdirSync('path to event folder (e.g ./events/djs)').filter(file => file.endsWith('.js')); //Getting an array of all djs events.
const mongoEvents = fs.readdirSync('path to event folder (e.g ./events/mongo)').filter(file => file.endsWith('.js')); //Getting an array of all mongo events.
const functionFiles = fs.readdirSync('path to functions folder (e.g ./functions)').filter(file => file.endsWith('.js')); //Getting an array of all functions.

DiscordHandlers.commands(commandFolders, 'path to command folders (e.g ./commands)', client); //Running the command handler.
DiscordHandlers.djsEvents(djsEvents, 'path to event folder (e.g ./events/djs)', client); //Running the event handler for Discord.js events.
DiscordHandlers.functions(functionFiles, 'path to function folder (e.g ./functions)', client); //Running the functions handler to pass in client.

// If using 'mongoEvents()' make sure you have mongoose installed and required in your file as 'mongoose'.
DiscordHandlers.mongoEvents(mongoEvents, 'path to event folder (e.g ./events/mongo)', client, mongoose); //Running the event handler for mongoose connection events.

client.login('BOT TOKEN HERE');
```
&nbsp;
## 📝 ~ Features

- One line command handler.
- One line event handler.
- Easy to use.
- Discord.js v12 Support
- Discord Server Support