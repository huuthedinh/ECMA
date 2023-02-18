import { render, router } from "./lib";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminProjectPage from "./pages/admin/projects";
import Homepage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import AdminAddProjectsPage from "./pages/admin/projects-add";
import AdminEditProjectsPage from "./pages/admin/projects-edit";



router.on("/", () => render(Homepage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));
router.notFound(() => render(NotFoundPage, app));


router.resolve();




