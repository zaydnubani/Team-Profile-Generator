const Manager = require('../library/manager.js');

let testvalue;

test('Sets Manager name given employee extension getName().', () => {
    testvalue = "zayd";
    const zayd = new Manager("zayd", "12", "zayd@email.com","1");
    expect(zayd.getName()).toBe(testvalue);
});

test('Sets Manager id given employee extension getId().', () => {
    testvalue = "12";
    const zayd = new Manager("zayd", "12", "zayd@email.com","1");
    expect(zayd.getId()).toBe(testvalue);
});

test('Sets Manager email given employee extenstion getEmail().', () => {
    testvalue = "zayd@email.com";
    const zayd = new Manager("zayd", "12", "zayd@email.com","1");
    expect(zayd.getEmail()).toBe(testvalue);
});

test('Sets Manager office number given getOffice().', () => {
    testvalue = "1";
    const zayd = new Manager("zayd", "12", "zayd@email.com","1");
    expect(zayd.getOffice()).toBe(testvalue);
});

test('Sets Manager role given getRole().', () => {
    testvalue = "Manager";
    const zayd = new Manager("zayd", "12", "zayd@email.com","1");
    expect(zayd.getRole()).toBe(testvalue);
});