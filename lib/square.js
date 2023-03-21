class Square {
    constructor(text, fontColor, shape, shapeColor) {
        this.text = text;
        this.fontColor = fontColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

            <rect width="200" height="200" style="fill:${this.shapeColor}" />
            <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.fontColor}" font-size="50">${this.text}</text>
        </svg>`
    }
    
}


module.exports = Square;