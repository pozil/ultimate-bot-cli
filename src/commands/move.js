const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

const DEFAULT_SPEED = 100;
const DEFAULT_DISTANCE = 500;

class MoveCommand extends Command {
    async run() {
        const { flags } = this.parse(MoveCommand);
        const { speed, distance } = flags;

        const bot = await getUltimateBot();
        this.log(`Moving bot: distance=${distance}, speed=${speed}`);
        return bot.move(speed, distance).then(() => bot.disconnect());
    }
}

MoveCommand.description = 'Move the Ultimate Bot';

MoveCommand.flags = {
    speed: flags.integer({
        char: 's',
        description: 'Movement speed.',
        default: DEFAULT_SPEED
    }),
    distance: flags.integer({
        char: 'd',
        description: 'Distance to move. Use negative values for reverse.',
        default: DEFAULT_DISTANCE
    })
};

module.exports = MoveCommand;
