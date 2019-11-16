const { Command, flags } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class LineFollowerCommand extends Command {
    async run() {
        const { flags } = this.parse(LineFollowerCommand);
        const { port } = flags;

        const bot = await getUltimateBot();
        const value = await bot.lineFollowerRead(port);
        this.log(`Line follower sensor value: ${JSON.stringify(value)}`);
        return bot.disconnect();
    }
}

LineFollowerCommand.description = 'Reads line follower sensor';

LineFollowerCommand.flags = {
    port: flags.integer({
        char: 'p',
        description: 'Port',
        required: true
    })
};

module.exports = LineFollowerCommand;
