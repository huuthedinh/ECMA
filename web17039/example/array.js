const projects = ["Project A", "Project B", "Projet C"];

let result = "";
// for (let i = 0; i < projects.length; i++) {
//     result += `<div>${projects[i]}</div>`;
// }

// for...in
// for (let index in projects) {
//     result += `<div>${projects[index]}</div>`;
// }

// for...of
// for (let value of projects) {
//     result += `<div>${value}</div>`;
// }

// forEach
// projects.forEach((value, index) => {
//     result += `<div>${value}</div>`;
// });

// method map

const result2 = projects
    .map(function (item) {
        return `<div>${item}</div>`;
    })
    .join("");

console.log("result2", result2);