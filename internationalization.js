var Int1 = require('int1');

const january = new Date(9e8);
const english = new Int1.DateTimeFormat('en', {month : 'long'});
const spanish = new Int1.DateTimeFormat('es', {month: 'long'});

console.log(english.format(january));
console.log(spanish.format(january));