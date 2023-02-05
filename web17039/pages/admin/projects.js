import { projects } from "../../data";
import { useEffect, useState } from "../../lib";
const AdminProjectPage = () => {
    const [data, setData] = useState(projects);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newdata = data.filter((projects) => projects.id != id);
                setData(newdata)
                console.log(id);
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

