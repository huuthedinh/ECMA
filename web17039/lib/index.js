import Navigo from "navigo";
const router = new Navigo("/", { hash: true, linksSelector: "a" });

const render = (component, container) => {
    container.innerHTML = component();
};
export { render, router };
