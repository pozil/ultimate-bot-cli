const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

const DEFAULT_SPEED = 100;

class EncoderSetPositionCommand extends Command {
    async run() {
        const { flags } = this.parse(EncoderSetPositionCommand);
        const { port, speed, position } = flags;

        const bot = await getUltimateBot();
        this.log(
            `Moving encoder motor: port=${port}, position=${position}, speed=${speed}`
        );
        return bot
            .moveEncoderMotorTo(port, speed, position)
            .then(() => bot.disconnect());
    }
}

EncoderSetPositionCommand.description = 'Moves an encoder motor to a position';

EncoderSetPositionCommand.flags = {
    port: flags.integer({
        char: 'p',
        description: 'Encoder motor port',
        required: true
    }),
    speed: flags.integer({
        char: 's',
        description: 'Movement speed.',
        default: DEFAULT_SPEED
    }),
    position: flags.integer({
        char: 't',
        description: 'Position to move to.',
        required: true
    })
};

module.exports = EncoderSetPositionCommand;
