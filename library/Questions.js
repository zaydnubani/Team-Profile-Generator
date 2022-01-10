const Questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What role do you want to add?',
        choices: ["Intern", "Engineer", "Manager"],
        validate: inputRole => {
            if (inputRole) {
                return true;
            } else {
                console.log('Error! Please select a role.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('Error! Please input a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?',
        validate: inputIDNumber => {
            if (inputIDNumber) {
                return true;
            } else {
                console.log('Error! Please input a valid id number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('Error! Please input a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do you attend?',
        when: (userInput) => userInput.role === 'Intern',
        validate: inputSchool => {
            if (inputSchool) {
                return true;
            } else {
                console.log('Error! Please input a valid school.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub username?',
        when: (userInput) => userInput.role === 'Engineer',
        validate: inputgitHub => {
            if (inputgitHub) {
                return true;
            } else {
                console.log('Error! Please input a valid gitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
        when: (userInput) => userInput.role === 'Manager',
        validate: inputOffice => {
            if (inputOffice) {
                return true;
            } else {
                console.log('Error! Please input a valid office number.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'choose',
        message: 'What would you like to do?',
        choices: ["Create a profile.", "View my team."],
        validate: inputChoice => {
            if (inputChoice) {
                return true;
            } else {
                console.log('Error! Please choose from one of the available options.');
                return false;
            }
        }
    }
];

module.exports = Questions; 