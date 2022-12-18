import {Game} from './game.js'

const SCALE = 2
const GAME_WIDTH = 256
const GAME_HEIGHT = 240
const WIDTH = GAME_WIDTH * SCALE
const HEIGHT = GAME_HEIGHT * SCALE
const gameElement = document.getElementById('game')
const canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
canvas.setAttribute('width', WIDTH)
canvas.setAttribute('height', HEIGHT)
gameElement.append(canvas)
const ctx = canvas.getContext('2d')
ctx.scale(SCALE, SCALE)
let oldTimestamp = 0

const input = {
    up: false,
    down: false,
    left: false,
    right: false,
    a: false,
    b: false,
    start: false,
    select: false,
}

const onKey = mode => {
    return (e => {
        switch (e.key) {
            // up
            case 'ArrowUp':
            case 'w':
                input['up'] = mode === 'down' ? true : false;
                break;
            // down
            case 'ArrowDown':
            case 's':
                input['down'] = mode === 'down' ? true : false;
                break;
            // left
            case 'ArrowLeft':
            case 'a':
                input['left'] = mode === 'down' ? true : false;
                break;
            // right
            case 'ArrowRight':
            case 'd':
                input['right'] = mode === 'down' ? true : false;
                break;
            // a
            case 'x':
            case '.':
                input['a'] = mode === 'down' ? true : false;
                break;
            // b
            case 'z':
            case ',':
                input['b'] = mode === 'down' ? true : false;
                break;
            //start
            case 'Enter':
                input['start'] = mode === 'down' ? true : false;
                break;
            // select
            case 'Shift':
                input['select'] = mode === 'down' ? true : false;
                break;
        }
    })
}
document.addEventListener('keydown', onKey('down'))
document.addEventListener('keyup', onKey('up'))

const game = new Game(GAME_WIDTH, GAME_HEIGHT)

function gameLoop(timestamp) {
    const delta = (timestamp - oldTimestamp) / 1000
    oldTimestamp = timestamp

    // clear the canvas for redrawing
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    game.handleInput(input, delta)
    game.update(delta)
    game.render(ctx, delta)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
