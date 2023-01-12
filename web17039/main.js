import { render, router } from "./lib";
import Homepage from "./pages/home";
import ProjectsPage from "./pages/detail-project";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
const app = document.querySelector("#app");

router.on("/", () => render(Homepage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/project", () => render(ProjectsPage, app));
router.on("/project/:id", () => render(ProjectPage, app));
router.notFound(() => render(NotFoundPage, app))
router.resolve();


