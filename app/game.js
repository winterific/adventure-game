import {Enemy} from './enemy.js'
import {Player, PLAYER_HEIGHT, PLAYER_WIDTH} from './player.js'

export class Game {
    constructor(width, height) {
        this.w = width
        this.h = height
        this.player = new Player(width*(3/4) - PLAYER_WIDTH/2, height*(3/4) - PLAYER_HEIGHT/2)
        this.enemies = [
            new Enemy(0, 0),
            new Enemy(0, 32),
        ]
    }
    handleInput(input, delta) {
        this.player.handleInput(input, delta)
    }
    update(delta) {
        for (const enemy of this.enemies) {
            enemy.update(delta, this.player)
        }
        this.player.update(delta)
    }
    render(ctx, delta) {
        for (const enemy of this.enemies) {
            enemy.render(ctx, delta)
        }
        this.player.render(ctx, delta)
    }
}

export default {Game}