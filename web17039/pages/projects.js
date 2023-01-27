import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
    return `
    ${Header()}
    <h1>Projects Page</h1>
    <div class="projects">
        
        ${ProjectList()}
    </div>
    `;
};
export default ProjectsPage;