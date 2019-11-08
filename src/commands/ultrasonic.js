const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class UltrasonicReadCommand extends Command {
    async run() {
        const { flags } = this.parse(UltrasonicReadCommand);
        const { port } = flags;

        const bot = await getUltimateBot();
        const distance = await bot.ultrasonicSensorRead(port);
        this.log(
            `Ultrasonic sensor read: port=${port}, distance=${distance}cm`
        );
        await bot.disconnect();
    }
}

UltrasonicReadCommand.description =
    'Reads the ultrasonic sensor and returns a distance';

UltrasonicReadCommand.flags = {
    port: flags.integer({
        char: 'p',
        description: 'Port',
        required: true
    })
};

module.exports = UltrasonicReadCommand;
