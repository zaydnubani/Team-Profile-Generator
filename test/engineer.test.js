const Engineer = require('../library/engineer.js');

let testvalue;

test('Sets engineer name given getName().', () => {
    testvalue = "zayd";
    const zayd = new Engineer("zayd", "12", "zayd@email.com","zaydnubani");
    expect(zayd.getName()).toBe(testvalue);
});

test('Sets engineer id given getId().', () => {
    testvalue = "12";
    const zayd = new Engineer("zayd", "12", "zayd@email.com","zaydnubani");
    expect(zayd.getId()).toBe(testvalue);
});

test('Sets engineer name given getEmail().', () => {
    testvalue = "zayd@email.com";
    const zayd = new Engineer("zayd", "12", "zayd@email.com","zaydnubani");
    expect(zayd.getEmail()).toBe(testvalue);
});

test('Sets engineer gitHub given getGithub().', () => {
    testvalue = "zaydnubani";
    const zayd = new Engineer("zayd", "12", "zayd@email.com","zaydnubani");
    expect(zayd.getGithub()).toBe(testvalue);
});

test('Sets engineer role given getRole().', () => {
    testvalue = "Engineer";
    const zayd = new Engineer("zayd", "12", "zayd@email.com","zaydnubani");
    expect(zayd.getRole()).toBe(testvalue);
});