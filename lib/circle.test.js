const Circle = require('./circle.js');

describe('Circle', () => {
    it('should return a circle', () => {
        const circle = new Circle('A', 'red', 'circle', 'blue');
        const result = circle.render();
        const expectedOutput = `<circle cx="150" cy="100" r="90" fill="blue" />
    <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="red" font-size="70">A</text>`
        expect(result).toContain(expectedOutput);
    });
});