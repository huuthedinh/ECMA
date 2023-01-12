const productlist = ["product A", "product B"];
const productlistel = document.querySelector("#productlist");

let result = "";
for (let i = 0; i < productlist.length; i++) {
    result += "<div>" + productlist[i] + "</div>";
}
productlistel.innerHTML = result;