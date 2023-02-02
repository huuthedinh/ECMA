const MyDisplay = (conten) => {
    document.querySelector("#app").innerHTML = conten;

}
const MyCalculator = (a, b, callback) => {
    callback(a + b);
}
MyCalculator(5, 5, MyDisplay);