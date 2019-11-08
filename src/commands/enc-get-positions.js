const { Command } = require('@oclif/command');
const getUltimateBot = require('../ultimate-bot.js');

class EncoderGetPositionsCommand extends Command {
    async run() {
        const bot = await getUltimateBot();
        const pos = await bot.getEncoderMotorPositions();
        this.log(`Encoder motor positions: ${JSON.stringify(pos)}`);
        return bot.disconnect();
    }
}

EncoderGetPositionsCommand.description = 'Reads encoder motor positions';

EncoderGetPositionsCommand.flags = {};

module.exports = EncoderGetPositionsCommand;
