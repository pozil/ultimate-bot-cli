const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class ModeSetCommand extends Command {
    async run() {
        const { flags } = this.parse(ModeSetCommand);
        const { mode } = flags;

        const bot = await getUltimateBot();
        bot.setMode(mode);
        this.log(`MegaPi new mode: ${mode}.`);
        await bot.disconnect();
    }
}

ModeSetCommand.description = 'Sets the MegaPi mode';

ModeSetCommand.flags = {
    mode: flags.integer({
        char: 'm',
        description:
            'New mode: 0 = manual mode, 1 = obstacle avoidance, 2 = balance, 3 = IR remote, 4 = line following'
    })
};

module.exports = ModeSetCommand;
