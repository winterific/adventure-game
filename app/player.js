export const PLAYER_WIDTH = 16
export const PLAYER_HEIGHT = 16

export default class Player {
    constructor(x, y) {
        this.w = PLAYER_WIDTH
        this.h = PLAYER_WIDTH
        this.x = x || 0
        this.y = y || 0
    }
    render(ctx, delta) {
        ctx.fillStyle = 'forestgreen'
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}