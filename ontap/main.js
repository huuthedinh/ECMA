import { render, router } from "./lib";
import "bootstrap/dist/css/bootstrap.min.css"
import listProduct from "./page/list";
import AddProduct from "./page/add";
import EditProduct from "./page/update";


const app = document.querySelector("#app");
router.on("/", () => render(listProduct, app));
router.on("/add", () => render(AddProduct, app));
router.on("/:id/edit", ({ data }) => render(() => EditProduct(data), app));
router.resolve();