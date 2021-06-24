const { Collection } = require('discord.js');
const fs = require('fs');

module.exports = {
    events: async (eventFiles, path, client) => {
        for (const file of eventFiles) {
            const event = require(`${path}/${file}`);
            if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
            else client.on(event.name, (...args) => event.execute(...args, client));
        };
    },

    commands: async (commandFolders, path, client) => {
        client.commands = new Collection();
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`${path}/${folder}/${file}`);
                client.commands.set(command.name, command);
            }
        }
    }
};