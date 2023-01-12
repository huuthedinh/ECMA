// object = {key : value }
const person = {
    name: "John",
    age: 30,
    isMarried: true,
    address: {
        street: "Main Street",
    },
};
// const myName = person.name;
// const myAge = person.age;
// const myAddress = person.address;

function showInfo({ name, age, isMarried, address: { street } }) {
    // console.log("Name " + name + "," + "Age " + age + "," + "Street " + street);
    console.log(`Name: ${name}, Age: ${age}, Street: ${street}`);
    console.log(`Tình trạng: ${isMarried ? "Đã kết hôn" : "Độc thân"}`);
}
showInfo(person);
// destructuring assignment

function useState(initialState) {
    let state = initialState;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return [getState, setState];
}
// Giá trị khởi tạo của count là 10
// Setcount có nhiệm vụ thay đổi giá trị của count
const [count, setCount] = useState(10);
console.log("Giá trị cũ", count()); // 10
console.log("Giá trị mới", count()); // 20