const Intern = require('./library/intern');

const Manager = require('./library/manager');

const Engineer = require('./library/engineer');

const zayd = new Manager('Zayd', '12', 'zayd@email.com', '1');

console.log(zayd.getRole());

console.log(zayd.getName());
