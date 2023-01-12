// function expresstion
const sum2 = function (a, b) {
    return a + b;
}
console.log("function expresstion", sum2(10, 20));
//arrow function
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(10, 25));
//IIFE function
(function (a, b) {
    console.log(a + b);
})(50, 100);
((a, b) => console.log(a + b))(100, 200);