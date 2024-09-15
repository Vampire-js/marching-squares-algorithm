export class Vector2d {
    constructor(x, y) {
        this.x = x 
        this.y = y

        return (x + y)
    }
    copy(v) {
        this.x = v.x
        this.y = v.y
    }
    set(x,y){
        this.x = x
        this.y = y
    }
    reflect(){
        return new Vector2d(this.x, this.y)
    }
    add(a,b){
        return new Vector2d(this.x + a , this.y+b)
    }
}

export const Vector = {
    dist: (v1, v2) => {
        return Math.sqrt((v2.y - v1.y) * (v2.y - v1.y) + (v2.x - v1.x) * (v2.x - v1.x))
    },
    mod: (v) => {
        return Math.sqrt(v.x * v.x + v.y * v.y)
    },
    rot: (angle) => {
     let cos = Math.cos(angle)
     let sin = Math.sin(angle)

     let vec = new Vector2d(cos, sin)
     return vec
    },
    mult: (v, a) => {
        return new Vector2d(v.x * a, v.y * a)
    }
}