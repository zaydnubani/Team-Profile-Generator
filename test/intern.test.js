const Intern = require('../library/intern.js');

let testvalue;

test('Sets Intern name given employee extension getName().', () => {
    testvalue = "zayd";
    const zayd = new Intern("zayd", "12", "zayd@email.com","temple university");
    expect(zayd.getName()).toBe(testvalue);
});

test('Sets Intern id given employee extension getId().', () => {
    testvalue = "12";
    const zayd = new Intern("zayd", "12", "zayd@email.com","temple university");
    expect(zayd.getId()).toBe(testvalue);
});

test('Sets Intern name given employee extenstion getEmail().', () => {
    testvalue = "zayd@email.com";
    const zayd = new Intern("zayd", "12", "zayd@email.com","temple university");
    expect(zayd.getEmail()).toBe(testvalue);
});

test('Sets Intern school given getSchool().', () => {
    testvalue = "temple university";
    const zayd = new Intern("zayd", "12", "zayd@email.com","temple university");
    expect(zayd.getSchool()).toBe(testvalue);
});

test('Sets Intern role given getRole().', () => {
    testvalue = "Intern";
    const zayd = new Intern("zayd", "12", "zayd@email.com","temple university");
    expect(zayd.getRole()).toBe(testvalue);
});