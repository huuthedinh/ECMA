import { useEffect, router } from "../../lib";
import { projects } from "../../data";

const AdminEditProjectPage = ({ id }) => {
    const currentProject = projects.find((project) => project.id == id);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const newProject = {
                id: currentProject.id,
                name: projectName.value,
            };


            const newProjects = projects.map((project) => {
                return project.id == newProject.id ? newProject : project;
            });

            router.navigate("/admin/projects");
        });
    });
    if (!currentProject) return null;

    return `<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value="${currentProject.name}" />
                    </div>
                    <button class="btn btn-primary">Cập nhật</button>
                </form>
    </div>`;
};

export default AdminEditProjectPage;