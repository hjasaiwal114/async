class Reactangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculatedArea() {
        return this.wedth * this.height;
    }

    calculatedPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(12, 10);

const area  = rectangle.calculatedArea();
const parimeter = rectangle.calculatedPerimeter();

console.log(`Rectangle Area: ${area}`);
console.log(`Recatngle perimeter; ${perimeter}`);