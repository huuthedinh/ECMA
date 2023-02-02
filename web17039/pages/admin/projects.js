import { projects } from "../../data";
import { useEffect, useState } from "../../lib";
const AdminProjectPage = () => {
    const [data, setData] = useState(projects);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                console.log(id);
            });
        }
    });
    return `<div>
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
                     <td width="150"><button class="btn btn-remove btn-danger" data-id = "${project.id}">Remove</button></td>
                 </tr> 
             `;
            })
            .join("")}
     </tbody>
 </table>
</div>`;
};
export default AdminProjectPage;

