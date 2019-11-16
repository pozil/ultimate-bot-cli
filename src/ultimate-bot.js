const MegaPi = require('megapi-node-client');

const PORT_TRACK_RIGHT = 1; // Encoder motor 3
const PORT_TRACK_LEFT = 2; // Encoder motor 3
const PORT_ARM = 3; // Encoder motor 3
const PORT_GRIPPER = 12; // DC motor 4B

class UltimateBot {
    constructor() {
        this.megaPi = new MegaPi('/dev/ttyUSB0', {
            logWelcomeMessage: false
        });
    }

    async connect() {
        return this.megaPi.connect();
    }

    async disconnect() {
        return this.megaPi.disconnect();
    }

    isConnected() {
        return this.megaPi.isConnected();
    }

    stopAllMotors() {
        this.megaPi.encoderMotorStop(PORT_TRACK_RIGHT);
        this.megaPi.encoderMotorStop(PORT_TRACK_LEFT);
        this.megaPi.encoderMotorStop(PORT_ARM);
        this.megaPi.dcMotorStop(PORT_GRIPPER);
    }

    reset() {
        this.megaPi.reset();
    }

    async getMode() {
        return this.megaPi.getMode();
    }

    setMode(mode) {
        this.megaPi.setMode(mode);
    }

    async getModeMoveSpeed() {
        return this.megaPi.getModeMoveSpeed();
    }

    setModeMoveSpeed(speed) {
        this.megaPi.setModeMoveSpeed(speed);
    }

    async ultrasonicSensorRead(port) {
        return this.megaPi.ultrasonicSensorRead(port);
    }

    lineFollowerRead(port) {
        return this.megaPi.lineFollowerRead(port);
    }

    async getEncoderMotorPosition(motor) {
        return this.megaPi.encoderMotorPosition(motor);
    }

    async moveEncoderMotorTo(port, speed, position) {
        return this.megaPi.encoderMotorMoveTo(port, speed, position);
    }

    async rotate(angle) {
        return Promise.all([
            this.megaPi.encoderMotorMove(PORT_TRACK_RIGHT, 100, angle),
            this.megaPi.encoderMotorMove(PORT_TRACK_LEFT, 100, angle)
        ]);
    }

    async move(speed, distance) {
        return Promise.all([
            this.megaPi.encoderMotorMove(PORT_TRACK_RIGHT, speed, distance),
            this.megaPi.encoderMotorMove(PORT_TRACK_LEFT, speed, 0 - distance)
        ]);
    }

    async getEncoderMotorPositions() {
        const trackRight = await this.megaPi.encoderMotorPosition(
            PORT_TRACK_RIGHT
        );
        const trackLeft = await this.megaPi.encoderMotorPosition(
            PORT_TRACK_LEFT
        );
        const arm = await this.megaPi.encoderMotorPosition(PORT_ARM);
        return { trackRight, trackLeft, arm };
    }

    async runDcMotor(port, speed, duration) {
        this.megaPi.dcMotorRun(port, speed);
        if (duration) {
            return new Promise(resolve => {
                setTimeout(() => {
                    this.megaPi.dcMotorStop(port);
                    resolve();
                }, duration);
            });
        }
        return Promise.resolve();
    }
}

const bot = new UltimateBot();

async function getUltimateBot() {
    if (bot.isConnected()) {
        return bot;
    }
    await bot.connect();
    return bot;
}

module.exports = getUltimateBot;
