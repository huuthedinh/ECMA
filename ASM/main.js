import { render, router } from "../ASM/lib";
import Homepage from "./pages/home";
import NotFoundPage from "./pages/not-found";



router.on("/", () => render(Homepage, app))
router.on("/not-found", () => render(NotFoundPage, app))







