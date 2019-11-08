const { Command } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class StopCommand extends Command {
    async run() {
        const bot = await getUltimateBot();
        bot.stopAllMotors();
        this.log('All motors stopped');
        return bot.disconnect();
    }
}

StopCommand.description = 'Stops all motors';

StopCommand.flags = {};

module.exports = StopCommand;
