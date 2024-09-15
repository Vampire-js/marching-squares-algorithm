import { c } from "../app.js"
import { constants } from "../constants.js"

export class Line {
    constructor(a, b) {
        this.a = a
        this.b = b
        this.color = "#83e85a"
        this.width = 2
        this.init()
    }
    init() {
        c.beginPath();
        c.shadowColor = constants.shadowColor
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.shadowBlur = constants.shadowBlur;
        c.moveTo(this.a.x, this.a.y);
        c.lineTo(this.b.x, this.b.y);
        c.strokeStyle = constants.lineColor
        c.lineWidth = this.width
        c.stroke();
    }
    update() {
        this.init()
    }
}