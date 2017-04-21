'use strict'


let Shapes = {};

class Figura {
       
  constructor(shapes,options) {
    this.shapes = shapes; 
    this.options = options
  }

  getArea() {
      let shape = new Shapes[this.shapes](this.options)
      let area = shape.getArea()
      return area; 
  }
  
}

class Triangle extends Figura {
    constructor(options) {
      Shapes.Triangle = Triangle;
      super("Triangle", options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      return 0.5 * this.width * this.height;
    }
}

class Rectangle extends Figura {
    constructor(options) {
      Shapes.Rectangle = Rectangle;
      super("Rectangle",options)
      this.width = options.width; 
      this.height = options.height;
    }
    getArea() {
      return this.width * this.height;
    }
}

class Square extends Figura {
    constructor(options) {
      Shapes.Square = Square; 
      super("Square",options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      var area = Math.pow(this.width,2) 
      return area; 
    }
}

module.exports = {
  Figura,
  Triangle,
  Rectangle,
  Square
};

