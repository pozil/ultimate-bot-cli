const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

const DEFAULT_ANGLE = 830;

class RotateCommand extends Command {
    async run() {
        const { flags } = this.parse(RotateCommand);
        const { angle } = flags;

        const bot = await getUltimateBot();
        this.log(`Rotating bot: angle=${angle}`);
        return bot.rotate(angle).then(() => bot.disconnect());
    }
}

RotateCommand.description = 'Rotates the Ultimate Bot';

RotateCommand.flags = {
    angle: flags.integer({
        char: 'a',
        description: 'Rotation angle (not a standard unit, 830 is 180 degrees)',
        default: DEFAULT_ANGLE
    })
};

module.exports = RotateCommand;
