const inquirer = require('inquirer');

const fs = require('fs');

const Intern = require('./library/intern');

const Manager = require('./library/manager');

const Engineer = require('./library/engineer');

const Questions = require('./library/Questions');

const members = [];

let manager;

const init = () => {
    start();
};

const start = () => {
    inquirer.prompt(Questions.manQuest).then((answer) => {
        if(answer.choose === 'Create a profile.'){
            choose();
        } 
        else if(answer.choose === 'View my team.'){
            console.log(members);
        }
        else {
            console.log('Error!');
        }
    })
};

const choose = () => {
    inquirer.prompt(Questions.empQuest).then((answer) => {
        console.log(answer);
        role(answer.add);
    });
};

const role = () => {
    inquirer.prompt(Questions.empQuest).then(answer => {
        if (answer.role === 'Intern'){
            members.push(new Intern(answer.name, answer.id, answer.email, answer.school));
        } else if (answer.role === 'Engineer'){
            members.push(new Engineer(answer.name, answer.id, answer.email, answer.gitHub));
        } else if (answer.role === 'Manager'){
            manager = new Manager(answer.name, answer.id, answer.email, answer.office);
        } if (answer.loop === true){
            role();

        } else {

            const mainHtml = fs.readFileSync('./templates/main.html', 'utf8');

            const managerHtml = fs.readFileSync('./templates/manager.html', 'utf8');

            
            managerHtml = managerHtml.replaceAll('{{ name }}', manager.getName());
            managerHtml = managerHtml.replaceAll('{{ role }}', manager.getRole());
            managerHtml = managerHtml.replaceAll('{{ id }}', manager.getId());
            managerHtml = managerHtml.replaceAll('{{ email }}', manager.getEmail());
            managerHtml = managerHtml.replaceAll('{{ officeNumber }}', manager.getOffice());

            let card = managerHtml;

            for (let i = 0; i < members.length; i++){
                let employee = members[i];
                card += generateHtml(employee);
            }
            
            mainHtml = mainHtml.replaceAll('{{ team }}', card);

            fs.writeFileSync('index.html', main); 
        }
    })
};

generateHtml = (employee) => {
 if (employee.getRole() === 'Engineer'){
    const engineerHtml = fs.readFileSync('./templates/engineer.html', 'utf8');
    engineerHtml = engineerHtml.replaceAll('{{ name }}', employee.getName());
    engineerHtml = engineerHtml.replaceAll('{{ role }}', employee.getRole());
    engineerHtml = engineerHtml.replaceAll('{{ id }}', employee.getId());
    engineerHtml = engineerHtml.replaceAll('{{ email }}', employee.getEmail());
    engineerHtml = engineerHtml.replaceAll('{{ github }}', employee.getGithub());
    return engineerHtml;
    } else if (employee.getRole() === 'Intern') {
    const internHtml = fs.readFileSync('./templates/intern.html', 'utf8');
    internHtml = internHtml.replaceAll('{{ name }}', employee.getName());
    internHtml = internHtml.replaceAll('{{ role }}', employee.getRole());
    internHtml = internHtml.replaceAll('{{ id }}', employee.getId());
    internHtml = internHtml.replaceAll('{{ email }}', employee.getEmail());
    internHtml = internHtml.replaceAll('{{ school }}', employee.getSchool());
    return internHtml;
    };
};

init();