import Header from "../components/Header";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";
import { useEffect, useState } from "../lib";

const DetailCategoryPage = ({ id }) => {
    const [category, setCategory] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3002/categoryProjects/${id}?_embed=projects`)
            .then((response) => response.json())
            .then((data) => setCategory(data));
    }, []);
    return `
            ${Header()}
            <div>
              
            </div>
            <div class="projectInfo">
                ${category.projects
            ? category.projects.map(
                (item) => `
                    <a href="/project/${item.id}">${item.name}</a>
                `
            )
            : ""
        }
            </div>
        `;
};
export default DetailCategoryPage;