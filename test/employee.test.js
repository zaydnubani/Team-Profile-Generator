const Employee = require('../library/employee.js');

let testvalue;

test('Sets employee name given getName().', () => {
    testvalue = "zayd";
    const zayd = new Employee("zayd", "12", "zayd@email.com");
    expect(zayd.getName()).toBe(testvalue);
});

test('Sets employee id given getId().', () => {
    testvalue = "12";
    const zayd = new Employee("zayd", "12", "zayd@email.com");
    expect(zayd.getId()).toBe(testvalue);
});

test('Sets employee name given getEmail().', () => {
    testvalue = "zayd@email.com";
    const zayd = new Employee("zayd", "12", "zayd@email.com");
    expect(zayd.getEmail()).toBe(testvalue);
});



