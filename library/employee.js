class Employee {
    /**
     * parent class for employee information.
     * @param {string} name 
     * @param {number} id 
     * @param {string} email 
     */
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    }
}

module.exports = Employee; 