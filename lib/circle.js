class Circle {
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
   
<circle cx="50" cy="50" r="40" stroke="orange" stroke-width="4" fill="orange" />
<text x="50" y="50" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="20">red</text>
</svg>`
    }

}

module.exports = Circle;