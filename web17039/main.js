import { render, router } from "./lib";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/about";
import AdminProjectPage from "./pages/admin/projects";
import ContactPage from "./pages/contact";
import DetailProjectPage from "./pages/detail-project";
import Homepage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import PostsPage from "./pages/posts";
import ProjectsPage from "./pages/projects";



router.on("/", () => render(Homepage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(() => DetailProjectPage(params), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/admin/projects", () => render(AdminProjectPage, app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
