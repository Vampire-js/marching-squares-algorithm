import { c } from "../app.js";
import { constants } from "../constants.js";


let colors = [constants.dotColor1, constants.dotColor2]

export class Point{
    constructor(position, state){
        this.state = state
        this.color = colors[state]
        this.position = position

        this.init()
    }
    init(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, 2,2)
    }
    update(){
        this.init()
    }
}