const { Command } = require('@oclif/command');
const { cli } = require('cli-ux');
const getUltimateBot = require('../ultimate-bot.js');

class GetPositionsCommand extends Command {
    async run() {
        this.log(GetPositionsCommand.description);
        const isConfirmed = await cli.confirm('Continue? (y/n)');
        if (!isConfirmed) {
            this.log('Operation cancelled.');
            return;
        }
        const bot = await getUltimateBot();
        bot.reset();
        this.log('MegaPi reset.');
        return bot.disconnect();
    }
}

GetPositionsCommand.description =
    'This command resets the MegaPi board including motor home positions.';

GetPositionsCommand.flags = {};

module.exports = GetPositionsCommand;
