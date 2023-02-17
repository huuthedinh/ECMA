
import nav from "./nav";

const header = () => {
    return /*html*/ `
        <header>
         ${nav()}
        </header>
    `;
};
export default header;