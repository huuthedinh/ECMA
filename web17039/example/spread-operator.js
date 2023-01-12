const person = {
    name: "John",
    age: 30,
    isMarried: true,
    child: {
        name: "Kien",
    },
};

// Shallow copy -> copy nông
// ====== Sử dụng spread operator để copy object
// const person2 = {
//     ...person,
//     address: "Main Street",
// };

// ====== Sử dụng Object.assign để copy object
// const person2 = Object.assign({ address: "Main street" }, person);
// console.log(person2);

// deep copy -> copy sâu
// const person2 = JSON.parse(JSON.stringify(person));
const person2 = structuredClone(person);

// Sử dụng deep copy để thay đổi giá trị B
person2.child.name = "Dat";
console.log("person 1", person);
console.log("person 2", person2);

// ====== Sử dụng spread-operator copy phần tử mảng
const products = ["Product A", "Product B"];
// products.push("Product C");
const newProducts = [...products, "Product C"];
console.log("products", products);
console.log("newProducts", newProducts);