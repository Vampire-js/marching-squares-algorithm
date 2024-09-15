import { constants } from "./constants.js"
import { Line } from "./js/Line.js"
import { Point } from "./js/Point.js"
import { Vector2d } from "./utils.js"

const canvas = document.getElementById("canvas")
export const c = canvas.getContext("2d")
canvas.width = 500
canvas.height = 500

let res = constants.res
let field = []

let rows = canvas.width / res
let cols = canvas.height / res

for (let i = 0; i < rows; i++) {

    field[i] = []
    for (let j = 0; j < cols; j++) {
        
        let x = i * res
        let y = j * res
        let pos = new Vector2d(x, y)
        let cell = new Point(pos, Math.round(Math.random()))
        field[i][j] = cell
    }

}

function getState(a, b, c, d) {
    // 8 4 2 1
    let ans = (8 * a + 4 * b + 2 * c + d)
    return ans
}

const animate = () => {
    requestAnimationFrame(animate)



    c.fillStyle = constants.backgroundColor
    c.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = i * res
            let y = j * res
            
            if(constants.showDots){field[i][j].update()}
            
            let a = new Vector2d(x + res * 0.5, y)
            let b = new Vector2d(x, y + res * 0.5)
            let c = new Vector2d(x + res * 0.5, y + res)
            let d = new Vector2d(x + res, y + res * 0.5)
            if (i < rows - 1 && j < cols - 1) {
                let state = getState(field[i][j].state, field[i + 1][j].state, field[i + 1][j + 1].state, field[i][j + 1].state)
                

                //Handling all 16 cases. 
                //(Will change this later if I come up with something better)
                switch (state) {
                    case 10:
                        new Line(a, d)
                        new Line(b, c)
                        // line1.update()
                        break;
                    case 14:
                         new Line(b, c)
                        break;
                    case 7:
                        new Line(a, b)
                        break;
                    case 13:
                        new Line(c, d)
                        break;

                    case 6:
                        new Line(c, a)
                        break;
                    case 2:
                        new Line(d, c)
                        break;

                    case 5:
                        new Line(d, a)
                        new Line(c, b)
                        break;
                    case 3:
                        new Line(b, d)
                        break;
                    case 4:
                        new Line(a, d)
                        break;
                    case 8:
                        new Line(a, b)
                        break;
                    case 12:
                        new Line(d, b)
                        break;
                    case 9:
                        new Line(a, c)
                        break;
                    case 1:
                        new Line(b, c)
                        break;
                    case 11:
                        new Line(a, d)
                        break;
                }
            }


        }
    }

}

animate()