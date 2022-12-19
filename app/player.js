export const PLAYER_WIDTH = 16
export const PLAYER_HEIGHT = 16
export const PLAYER_SPEED = 50

export class Player {
    constructor(x, y) {
        this.w = PLAYER_WIDTH
        this.h = PLAYER_WIDTH
        this.x = x || 0
        this.y = y || 0
        this.vx = 0
        this.vy = 0
        this.speed = PLAYER_SPEED
        this.items = []
    }
    handleInput(input, delta) {
        if (input.left && !input.right) {
            this.vx = -this.speed * delta
        }
        else if (input.right && !input.left) {
            this.vx = this.speed * delta
        }
        else {
            this.vx = 0
        }
        if (input.up && !input.down) {
            this.vy = -this.speed * delta
        }
        else if (input.down && !input.up) {
            this.vy = this.speed * delta
        }
        else {
            this.vy = 0
        }
    }
    update(delta) {
        this.x += this.vx
        this.y += this.vy
    }
    render(ctx, delta) {
        ctx.fillStyle = 'forestgreen'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.w / 2, 0, Math.PI * 2, true)
        ctx.fill()
    }
}

export default {Player, PLAYER_WIDTH, PLAYER_HEIGHT}