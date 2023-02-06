import { useEffect, router } from "../../lib"


const AdminAddProjectsPage = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", function (e) {
            // chặn sự kiện reload sau khi submit
            e.preventDefault();
            // Thêm phần tử vào mảng projects
            projects.push({ id: projects.length + 1, name: projectName.value })
            //Lưu vào storage
            localStorage.setItem("projects", JSON.stringify(projects));
            // chuyển huwongsbveef trang admin
            router.navigate("/admin/projects");
        });


    });
    return `<div class ="container">
    <h1>Thêm Sản Phẩm</h1>
    <form action="" id="form-add">
      <div class="form-group">
         <label for="" class="form-lable">Tên Dự Án
         <label>
            <input type="text" class="form-control" id="project-name">
      </div>
      <button class="btn btn-primary">Thêm</button>
    </form></div>`


}
export default AdminAddProjectsPage