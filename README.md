
# discord-handlers

An easy-to-use package implementing handlers for *Discord.js v14* events, commands, and components.
## Installation ⬇️

Install discord-handlers with npm

```bash
  npm install discord-handlers
```
    
## Documentation (w/Example) 📓

### • Creating the Handler
```js
const Handler = require("discord-handlers");
const handler = new Handler();
```

### • Folder Structure 🗂
You could use whichever folder structure you'd like, but with this package it's recommended to use the following structure:
```
Discord Bot/
├── node_modules
├── src/
│   ├── commands/
│   │   └── moderation/
│   │       └── kick.js
│   ├── components/
│   │   ├── buttons/
│   │   │   └── ok-button.js
│   │   ├── contextMenus/
│   │   ├── modals/
│   │   └── selectMenus/
│   ├── events/
│   │   ├── client/
│   │   │   ├── ready.js
│   │   │   └── interactionCreate.js
│   │   └── mongo/
│   │       ├── connecting.js
│   │       └── disconnected.js
│   └── bot.js
├── .env
├── package.json
└── package-lock.json
```

### • Handling Discord.js Events (Client Events) 🚩
```js
/*
* The function takes in the path to the Discord.js events folder.
* It also takes in the Discord client.
*/
handler.handleClientEvents("./src/events/client", client);
```

### • Handling MongoDB Events (Mongoose) 🚩
```js
/*
* The function takes in the path to the mongoose events folder.
* It also takes in the Discord client.
*/
handler.handleMongoEvents("./src/events/mongo", client);
```

### • Handling Components (Buttons, Context Menus, Select Menus, and Modals) 🔘
```js
/*
* The function takes in the path to the components folder.
* It also takes in the Discord client.
*/
(async () => {
  await handler
    .handleComponents("./src/components", client);
})();
```

### • Handling Global Commands ⌨️
#### You cannot use both Global commands AND Guild commands. Please select on handler.
```js
/*
* The function takes in the following:
* Path to the commands folder
* The Discord client
* The Discord client's ID
* The Discord client's token.
*/
handler.handleGlobalCommands(
  "./src/commands",
  client,
  "1038379144272158770",
  token
);
```

### • Handling Guild Commands ⌨️
#### You cannot use both Global commands AND Guild commands. Please select on handler.
```js
/*
* The function takes in the following:
* Path to the commands folder
* The Discord client
* The Discord client's ID
* The Discord server's ID the bot will run in
* The Discord client's token.
*/
handler.handleGuildCommands(
  "./src/commands",
  client,
  "1038379144272158770",
  "894328880998010930",
  token
);
```

### • Handling Interactions 💭
#### Your 'interactionCreate' event should look like the following:
```js
const Handler = require("discord-handlers");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    const handler = new Handler();
    // Pass in both the interaction and client:
    await handler.handleInteraction(interaction, client);
  },
};

```
## Demo/Example 📋
```js
require("dotenv").config(); // Storing bot token with .ENV which is recommended.
const { token } = process.env; // Getting the token from the .env file.
const { Client } = require("discord.js");
const Handler = require("discord-handlers");
const handler = new Handler();
const client = new Client({ intents: 131071 });

// Discord.js Event Handler:
handler.handleClientEvents("./src/events/client", client);

// MongoDB event Handler: (using mongoose)
handler.handleMongoEvents("./src/events/mongo", client);

// Discord.js Components Handler:
(async () => {
  await handler
    .handleComponents("./src/components", client);
})();

// Discord.js Global Commands Handler: [Select either Global or Guild NOT both]
// handler.handleGlobalCommands(
//   "./src/commands",
//   client,
//   "1038379144272158770",
//   token
// );

// Discord.js Guild Commands Handler: [Select either Global or Guild NOT both]
handler.handleGuildCommands(
  "./src/commands",
  client,
  "1038379144272158770",
  "894328880998010930",
  token
);

client.login(token);
```
## Support 💬

For support, join my [Discord server](https://discord.gg/74MasbJQ32).
## Authors 🖊

- [@FusionTerror](https://www.github.com/fusionterror)

