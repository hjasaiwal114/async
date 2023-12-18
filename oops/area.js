class Shape {
    calculateArea() {
        throw new Error("Method calculatedArea() must be overrridlns");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculatedArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.heigth = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

const rectangle = new Rectangle(8, 9);
const rectangleArea  = rectangle.calculateArea();
console.log('Rectangle areaa : ${rectangleArea}');