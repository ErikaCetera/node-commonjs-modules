import functionName from "./b-names.js";
import functionHobbies from "./b-hobbies.js";

import chalk from "chalk";

const noParam = () => {
    return{
        functionName,
        functionHobbies
    };
};

console.log(chalk.overline.bgGray(noParam));