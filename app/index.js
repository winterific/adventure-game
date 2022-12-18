import Game from './game.js'

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
                input['up'] = mode === 'down' ? true : false;
                break;
            // down
            case 'ArrowDown':
                input['down'] = mode === 'down' ? true : false;
                break;
            // left
            case 'ArrowLeft':
                input['left'] = mode === 'down' ? true : false;
                break;
            // right
            case 'ArrowRight':
                input['right'] = mode === 'down' ? true : false;
                break;
            // a
            case 'x':
                input['a'] = mode === 'down' ? true : false;
                break;
            // b
            case 'z':
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
    const delta = timestamp - oldTimestamp
    oldTimestamp = timestamp

    game.handleInput(input)
    game.render(ctx, delta)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
