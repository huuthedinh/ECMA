import { render, router } from "./lib";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import DetailProjectPage from "./pages/detail-project";
import Homepage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import PostsPage from "./pages/posts";
import ProjectsPage from "./pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(Homepage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(() => DetailProjectPage(params), app));
router.on("/posts", () => render(PostsPage, app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
