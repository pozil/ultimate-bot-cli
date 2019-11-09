const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class ModeSpeedCommand extends Command {
    async run() {
        const { flags } = this.parse(ModeSpeedCommand);
        const { speed } = flags;

        const bot = await getUltimateBot();

        if (speed === undefined) {
            const readSpeed = await bot.getModeMoveSpeed();
            this.log(`Mode move speed: ${readSpeed}`);
        } else {
            bot.setModeMoveSpeed(speed);
            this.log(`New mode move speed: ${speed}`);
        }

        await bot.disconnect();
    }
}

ModeSpeedCommand.description =
    'Gets or sets the move speed for the following modes: obstacle avoidance, line following';

ModeSpeedCommand.flags = {
    speed: flags.integer({
        char: 's',
        description: 'New speed'
    })
};

module.exports = ModeSpeedCommand;
