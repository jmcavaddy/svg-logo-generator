const Square = require('./square.js');

describe('Square', () => {
    it('should return a square', () => {
        const square = new Square('A', 'red', 'square', 'blue');
        const result = square.render();
        const expectedOutput = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <rect x="50" width="200" height="200" fill="blue" />
            <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="70">A</text>
        </svg>`
        expect(result).toContain(expectedOutput);
    });
});