import header from "../components/header"
import avata from "../components/avata"
import infor from "../components/infor"
import intro from "../components/intro"
import experience from "../components/experience"
import skill from "../components/skill"
import "../components/style.css"
import footer from "../components/footer"




const Homepage = () => {
    return `
    ${avata()}
    ${header()}
    ${infor()}
    ${intro()}
    ${experience()}
    ${skill()}
    ${footer()}

    `
}

export default Homepage