var rect = require("./rectangles");

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(rectangle.area());
      console.log(rectangle.perimeter());
    }
  });
  console.log("this statement is after the call to rect()");
}

solveRect(10, 5);
