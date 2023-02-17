import { render, router } from "../ASM/lib";
import Homepage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import "./components/style.css"
import AdminProjectPage from "./pages/admin/projects";



router.on("/", () => render(Homepage, app))
router.on("/not-found", () => render(NotFoundPage, app))
router.resolve();






