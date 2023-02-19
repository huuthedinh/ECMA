import { useEffect, router } from "../../lib"

import header from "../../components/header";


const AdminAddProjectsPage = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectdes = document.getElementById("project-des");
        const projectimg = document.getElementById("project-img");
        const projecttext = document.getElementById("project-text");


        form.addEventListener("submit", function (e) {
            // chặn sự kiện reload sau khi submit
            e.preventDefault();
            // Thêm phần tử vào mảng projects
            const formData = {
                name: projectName.value,
                des: projectdes.value,
                text: projecttext.value,

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
    ${header()}
    <h1>Thêm Sản Phẩm</h1>
    <form action="" id="form-add">
      <div class="form-group">
         <label for="" class="form-lable">Tên Dự Án<label>
         <input type="text" class="form-control" id="project-name">
         <label for="" class="form-lable">Mô tả<label>
         <input type="text" class="form-control" id="project-des">
         <label for="" class="form-lable">Ngôn Ngữ Sử Dụng<label>
         <input type="text" class="form-control" id="project-text">
         <label for="" class="form-lable">Ảnh Dự Án<label>
         <input type="file" class="form-control" id="project-img">
      </div>
      <br>
      <button class="btn btn-primary">Thêm</button>
    </form></div>`


}
export default AdminAddProjectsPage