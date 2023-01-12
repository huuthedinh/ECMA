// rest parameter

const add = (x, y, ...numbers) => {
    console.log("x", x); // 1
    console.log("y", y); // 2
    console.log(numbers); // [3,4,5]
};
add(1, 2, 3, 4, 5);
const showObject = ({ a, b, ...other }) => {
    console.log("a", a); // a
    console.log("b", b); // b
    console.log("other", other); // { c : 3, d: 4}
};
showObject({ a: 1, b: 2, c: 3, d: 4 });