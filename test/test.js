var Figura = require("../shapesarea.js");
var Triangle = Figura.Triangle;
var Rectangle = Figura.Rectangle;
var Square = Figura.Square;


describe("getArea Triangle", function() {
  it("must compute the triangle area correctly", function() {
    let a = new Triangle({ width: 100, height: 100 });
    var result = a.getArea();
    result.should.match(/^5000$/);
  })
});


describe("getArea Rectangle", function() {
  it("must compute the rectangle area correctly", function() {
    let b = new Rectangle({ width: 100, height: 100 });
    var result = b.getArea();
    result.should.match(/^10000$/);
  })
});

describe("getArea Square", function() {
  it("must compute the square area correctly", function() {
    let c = new Square({ width: 100});
    var result = c.getArea();
    result.should.match(/^10000$/);
  })
});