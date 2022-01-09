const Employee = require('./employee');

class Intern extends Employee {
    /**
     * child class, Intern information
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} school 
     */
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
