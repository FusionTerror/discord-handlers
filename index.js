class Handler {
  handleClientEvents = require(`${__dirname}/handlers/handleClientEvents`);
  handleComponents = require(`${__dirname}/handlers/handleComponents`);
  handleGlobalCommands = require(`${__dirname}/handlers/handleGlobalCommands`);
  handleGuildCommands = require(`${__dirname}/handlers/handleGuildCommands`);
  handleInteraction = require(`${__dirname}/handlers/handleInteraction`);
  handleMongoEvents = require(`${__dirname}/handlers/handleMongoEvents`);
}

module.exports = Handler;
