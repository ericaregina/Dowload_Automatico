const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Qual é o seu nome?',
    },
]).then(answers => {
    console.log(`Olá, ${answers.name}!`);
}).catch(err => {
    console.error('Erro:', err);
});