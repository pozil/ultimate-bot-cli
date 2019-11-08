const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

const DEFAULT_SPEED = 100;

class DcRunCommand extends Command {
    async run() {
        const { flags } = this.parse(DcRunCommand);
        const { port, speed, duration } = flags;

        const bot = await getUltimateBot();
        this.log(
            `Running DC motor: port=${port}, seed=${speed}, duration=${duration}`
        );
        return bot.runDcMotor(port, speed, duration).then(async () => {
            this.log(`Done running DC motor ${port}.`);
            await bot.disconnect();
        });
    }
}

DcRunCommand.description = 'Runs a DC motor';

DcRunCommand.flags = {
    port: flags.integer({
        char: 'p',
        description: 'DC motor port',
        required: true
    }),
    speed: flags.integer({
        char: 's',
        description: 'Movement speed.',
        default: DEFAULT_SPEED
    }),
    duration: flags.integer({
        char: 'd',
        description: 'Duration in milliseconds',
        required: true
    })
};

module.exports = DcRunCommand;
