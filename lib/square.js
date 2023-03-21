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
            <rect x="50" width="200" height="200" fill="${this.shapeColor}" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.fontColor}" font-size="70">${this.text}</text>
        </svg>`
    }
    
}


module.exports = Square;