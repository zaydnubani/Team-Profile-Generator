const Employee = require('./employee');

class Manager extends Employee {
    /**
     * child class, Intern information
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} officeNumber 
     */
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;