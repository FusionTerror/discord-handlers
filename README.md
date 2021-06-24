# Discord-Handler 📖
##### *Why spend time making a event or command handler? You got discord-handlers for Discord.JS v12!*
##### 💖 ~ Support: [Fusion Terror's YouTube](https://www.youtube.com/channel/UCjTvZBc6GFbYkVs9rGWJLbA), [Fusion Terror's Patreon](https://www.patreon.com/fusionterror)
##### 🙋‍♂ ~ Help: [Discord Server](https://discord.gg/QJyTkNxVrX)
---
&nbsp;
## ✅ ~ Installation
```
npm i discord-handler
```
&nbsp;
## 💡 ~ Example
```js
const DiscordHandler = require('discord-handler'); //Requiring Discord-Handler module.
const Discord = require('discord.js'); //Requiring Discord.js module.
const fs = require('fs'); //Requiring fs module.
const client = new Discord.Client(); //Creating and assigning the Discord.js Client constructor.

const eventFiles = fs.readdirSync('path to event folder (e.g ./events)').filter(file => file.endsWith('.js')); //Getting an array of all the event files.
const commandFolders = fs.readdirSync('path to command folders (e.g ./commands)'); //Getting all the folders insider of your events folder.

DiscordHandler.events(eventFiles, 'path to event folder (e.g ./events)', client); //Running the event handler.
DiscordHandler.commands(commandFolders, 'path to command folders (e.g ./commands)', client); //Running the command handler.

client.login('BOT TOKEN HERE');
```
&nbsp;
## 📝 ~ Features

- One line command handler.
- One line event handler.
- Easy to use.
- Discord.js v12 Support
- Discord Server Support