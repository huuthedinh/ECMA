import { useEffect, router } from "../../lib"


const AdminAddProjectsPage = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", function (e) {
            // chặn sự kiện reload sau khi submit
            e.preventDefault();
            // Thêm phần tử vào mảng projects
            const formData = {
                name: projectName.value,
            };
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            }).then(() => router.navigate("/admin/projects"))
        });


    });
    return /*html*/ `<div class ="container">
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