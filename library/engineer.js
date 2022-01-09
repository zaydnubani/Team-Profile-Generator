const Employee = require('./employee');

class Engineer extends Employee {
    /**
     * child class, Intern information
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} gitHub 
     */
    constructor (name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
     getGithub(){
         return this.gitHub;
     }
     getRole(){
         return 'Engineer';
     }
}


module.exports = Engineer;