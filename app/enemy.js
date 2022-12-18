export default class Enemy {
    constructor(x, y) {
        this.w = 16
        this.h = 16
        this.x = x || 0
        this.y = y || 0
    }
    render(ctx, delta) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}