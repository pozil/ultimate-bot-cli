# ultimate-bot-cli

CLI that interacts with the Makeblock Ultimate 2.0 Bot via MegaPi

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ultimate-bot-cli.svg)](https://npmjs.org/package/ultimate-bot-cli)
[![Downloads/week](https://img.shields.io/npm/dw/ultimate-bot-cli.svg)](https://npmjs.org/package/ultimate-bot-cli)
[![License](https://img.shields.io/npm/l/ultimate-bot-cli.svg)](https://github.com/pozil/ultimate-bot-cli/blob/master/package.json)

<!-- toc -->
* [ultimate-bot-cli](#ultimate-bot-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g ultimate-bot-cli
$ bot COMMAND
running command...
$ bot (-v|--version|version)
ultimate-bot-cli/1.0.0 darwin-x64 node-v10.16.3
$ bot --help [COMMAND]
USAGE
  $ bot COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`bot dc-run`](#bot-dc-run)
* [`bot enc-get-positions`](#bot-enc-get-positions)
* [`bot enc-set-position`](#bot-enc-set-position)
* [`bot help [COMMAND]`](#bot-help-command)
* [`bot move`](#bot-move)
* [`bot reset`](#bot-reset)
* [`bot rotate`](#bot-rotate)
* [`bot stop`](#bot-stop)

## `bot dc-run`

Runs a DC motor

```
USAGE
  $ bot dc-run

OPTIONS
  -d, --duration=duration  (required) Duration in milliseconds
  -p, --port=port          (required) DC motor port
  -s, --speed=speed        [default: 100] Movement speed.
```

_See code: [src/commands/dc-run.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/dc-run.js)_

## `bot enc-get-positions`

Reads encoder motor positions

```
USAGE
  $ bot enc-get-positions
```

_See code: [src/commands/enc-get-positions.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/enc-get-positions.js)_

## `bot enc-set-position`

Moves an encoder motor to a position

```
USAGE
  $ bot enc-set-position

OPTIONS
  -p, --port=port          (required) Encoder motor port
  -s, --speed=speed        [default: 100] Movement speed.
  -t, --position=position  (required) Position to move to.
```

_See code: [src/commands/enc-set-position.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/enc-set-position.js)_

## `bot help [COMMAND]`

display help for bot

```
USAGE
  $ bot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `bot move`

Move the Ultimate Bot

```
USAGE
  $ bot move

OPTIONS
  -d, --distance=distance  [default: 500] Distance to move. Use negative values for reverse.
  -s, --speed=speed        [default: 100] Movement speed.
```

_See code: [src/commands/move.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/move.js)_

## `bot reset`

This command resets the MegaPi board including motor home positions.

```
USAGE
  $ bot reset
```

_See code: [src/commands/reset.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/reset.js)_

## `bot rotate`

Rotates the Ultimate Bot

```
USAGE
  $ bot rotate

OPTIONS
  -a, --angle=angle  [default: 830] Rotation angle (not a standard unit, 830 is 180 degrees)
```

_See code: [src/commands/rotate.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/rotate.js)_

## `bot stop`

Stops all motors

```
USAGE
  $ bot stop
```

_See code: [src/commands/stop.js](https://github.com/pozil/utlimate-bot-cli/blob/v1.0.0/src/commands/stop.js)_
<!-- commandsstop -->
