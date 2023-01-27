import Header from "../components/Header";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";
import { projects } from "../data";
import { router } from "../lib";

const DetailProjectPage = ({ data: { id } }) => {
    // find
    // /project/:id
    const currentProject = projects.find((project) => project.id == id);
    if (!currentProject) return router.navigate("/projects");
    // conditional rendering
    return `
            ${Header()}
            <div>
                ${ProjectGallery({
        img: "https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/6a/60/66/ff4cb75b85731c218a341ece64190f0c.png.webp",
    })}
            </div>
            <div class="projectInfo">
                ${ProjectInfo(currentProject)}
            </div>
        `;
};
export default DetailProjectPage;