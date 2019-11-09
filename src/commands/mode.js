const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class ModeSetCommand extends Command {
    async run() {
        const { flags } = this.parse(ModeSetCommand);
        const { mode } = flags;

        const bot = await getUltimateBot();

        if (mode === undefined) {
            const readMode = await bot.getMode();
            this.log(`MegaPi mode: ${readMode}`);
        } else {
            bot.setMode(mode);
            this.log(`New MegaPi mode: ${mode}`);
        }

        await bot.disconnect();
    }
}

ModeSetCommand.description = 'Gets or sets the MegaPi mode';

ModeSetCommand.flags = {
    mode: flags.integer({
        char: 'm',
        description:
            'New mode: 0 = manual mode, 1 = obstacle avoidance, 2 = balance, 3 = IR remote, 4 = line following',
        options: ['0', '1', '2', '3', '4']
    })
};

module.exports = ModeSetCommand;
