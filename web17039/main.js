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
import AdminAddProjectsPage from "./pages/admin/projects-add";
import AdminEditProjectsPage from "./pages/admin/projects-edit";
import CategoryPage from "./pages/category";
import DetailCategoryPage from "./pages/category-detail";


router.on("/", () => render(Homepage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) => render(() => () => DetailProjectPage(data), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));
router.notFound(() => render(NotFoundPage, app));
router.on("/category", () => render(CategoryPage, app));
router.on("/category/:id", ({ data }) => render(() => DetailCategoryPage(data), app));

router.resolve();
