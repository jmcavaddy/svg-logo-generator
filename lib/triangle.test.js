const Triangle = require('./triangle.js');

describe('Triangle', () => {
    it('should return a triangle', () => {
        const triangle = new Triangle('A', 'red', 'triangle', 'blue');
        const result = triangle.render();
        const expectedOutput = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue" />
            <text x="150" y="125" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="70">A</text>
        </svg>`
        expect(result).toContain(expectedOutput);
    });
});


{}