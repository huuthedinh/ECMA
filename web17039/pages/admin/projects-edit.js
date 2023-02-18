import { useEffect, router, useState } from "../../lib";


const AdminEditProjectPage = ({ id }) => {
    const [projects, setProjects] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`, {
        })
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {

                name: projectName.value,
            };
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // '{"a": "10"}'
            }).then(() => router.navigate("/admin/projects"));
        });
    });


    return /*html*/`<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value="${projects.name}" />
                    </div>
                    <button class="btn btn-primary">Cập nhật</button>
                </form>
    </div>`;
};

export default AdminEditProjectPage;