const fullName = require('./names');
const hobbies = require('./hobbies');


const noParam = () => {
    return{
        fullName,
        hobbies
    };
};

console.log(noParam);
