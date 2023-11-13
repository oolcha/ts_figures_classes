enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.TRIANGLE;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const [sortedA, sortedB, sortedC] = [a, b, c]
      .sort((lengthA: number, lengthB: number) => lengthA - lengthB);

    if (sortedC >= sortedA + sortedB) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfP = 0.5 * (a + b + c);
    const area = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));

    return +area.toFixed(2);
  }
}

export class Circle {
  shape: Shape = Shape.CIRCLE;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.RECTANGLE;

  constructor(
    public color: Color,
    public width: number,
    public length: number,
  ) {
    if (length <= 0 || width <= 0) {
      throw new Error('Incorrect data');
    }
  }

  public getArea(): number {
    return +(this.width * this.length).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
