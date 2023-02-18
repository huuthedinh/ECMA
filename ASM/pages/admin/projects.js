import header from "../../components/header";
import { useEffect, useState } from "../../lib";

const AdminProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects", {
    })
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {

      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          // Lọc ra các phần tử có id khác với id của button
          const newProjects = projects.filter((project) => project.id != id);
          // Gán lại giá trị cho biến data
          setProjects(newProjects);
        });

      });
    }
  });
  return/*html*/ `<div>
    <h1>Quản Lí Dự Án</h1>
    ${header()}
 <table class="table table-bordered">
     <thead>
         <tr>
             <th>#</th>
             <th>Name</th>
             <th></th>
         </tr>
     </thead>
     <tbody>
         ${projects
      .map((project, index) => {
        return /*html*/ `
                 <tr>
                     <td>${index + 1}</td>
                     <td>${project.name}</td>
                     <td width="150">
                     <button class="btn btn-remove btn-danger" data-id = "${project.id}">Xóa</button>
                     <a href="/admin/projects/${project.id}/edit "class="btn btn-remove btn-danger">Sửa</a>
                     
                 </tr> 
             `;
      })
      .join("")}
     </tbody>
 </table>
</div>`;
};
export default AdminProjectPage;

