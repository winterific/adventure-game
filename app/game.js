import Enemy from './enemy.js'
import Player from './player.js'
import {PLAYER_HEIGHT, PLAYER_WIDTH} from './player.js'

export default class Game {
    constructor(width, height) {
        this.w = width
        this.h = height
        this.player = new Player(width/2 - PLAYER_WIDTH/2, height/2 - PLAYER_HEIGHT/2)
        this.enemies = [
            new Enemy(0, 0),
            new Enemy(0, 32),
        ]
    }
    handleInput(input) {
    }
    render(ctx, delta) {
        this.player.render(ctx, delta)
        for (const enemy of this.enemies) {
            enemy.render(ctx, delta)
        }
    }
}