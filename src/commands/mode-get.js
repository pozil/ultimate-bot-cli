const { Command } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class ModeGetCommand extends Command {
    async run() {
        const bot = await getUltimateBot();
        return bot.getMode().then(async mode => {
            this.log(`MegaPi mode: ${mode}.`);
            await bot.disconnect();
        });
    }
}

ModeGetCommand.description = 'Gets the MegaPi mode';

ModeGetCommand.flags = {};

module.exports = ModeGetCommand;
