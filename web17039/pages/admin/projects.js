
import { useEffect, useState } from "../../lib";
const AdminProjectPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        setData(projects);
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {

            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                const newProjects = data.filter((project) => project.id != id);
                localStorage.setItem("projects", JSON.stringify(newProjects));
                setData(newProjects);

            });
        }
    });
    return `<div>
    <h1>Quản Lí Dự Án</h1>
 <table class="table table-bordered">
     <thead>
         <tr>
             <th>#</th>
             <th>Name</th>
             <th></th>
         </tr>
     </thead>
     <tbody>
         ${data
            .map((project, index) => {
                return `
                 <tr>
                     <td>${index + 1}</td>
                     <td>${project.name}</td>
                     <td width="150"><button class="btn btn-remove btn-danger" data-id = "${project.id}">Xóa</button>
                     <a href="/admin/projects/${project.id}/edit">Sửa</a>
                     
                 </tr> 
             `;
            })
            .join("")}
     </tbody>
 </table>
</div>`;
};
export default AdminProjectPage;

