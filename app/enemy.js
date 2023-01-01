export const ENEMY_SPEED = 20

export class Enemy {
    constructor(x, y) {
        this.w = 16
        this.h = 16
        this.x = x || 0
        this.y = y || 0
        this.vx = 0
        this.vy = 0
        this.speed = ENEMY_SPEED
        this.level = 0
    }
    update(delta, player) {
        // update the enemie's position based on what the player is doing
        if (player.x > this.x) {
            this.vx = this.speed * delta 
        }
        else if (player.x < this.x) {
            this.vx = -this.speed * delta 
        }
        else {
            this.vx = 0
        }
        if (player.y > this.y) {
            this.vy = this.speed * delta 
        }
        else if (player.y < this.y) {
            this.vy = -this.speed * delta 
        }
        else {
            this.vy = 0
        }

        this.x += this.vx
        this.y += this.vy
    }
    render(ctx, delta) {
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.w / 2, 0, Math.PI * 2, true)
        ctx.fill()
    }
}

export default {Enemy}