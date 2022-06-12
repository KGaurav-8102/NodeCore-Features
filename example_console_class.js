
const fs = require('fs');

const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');

const myobject = new console.Console(err, out);

  
// It will display 'This is the first example' to out
myobject.log('This is the first example');
  
// It will display 'This is the second example' to out
myobject.log('This is the %s example', 'second');
  
// It will display 'Error: In this we creating some error' to err
myobject.error(new Error('In this we creating some error'));
  
const num = 'third';
  
// It will display 'This is the third error' to err
myobject.warn(`This is the ${num} example`);


//Console.assert()

const console = require('console');

var a = 10; var b = 5;

console.assert(1 == 1, 'Error at 1 == 1');
console.assert(1 != 1, 'error at 1 != 1');
console.assert(3 & 9, "error at 3&9");
console.assert(1 & 6, "error at 1&6");
console.assert(0 && 9, "error at 0&&9");
console.assert(1 && 8, "error at 1&&8");
console.assert(a % b == 1, "error at a%b==1");
console.assert(a > b, "error at a>b");
console.assert(b > a, "error at b>a");

console.count('a');
console.count('b');
console.count('a');
console.count('a');
console.count('a');
console.count('b');
console.countReset('a');
console.countReset('b');


num = 100;

if (num < 100) {
    console.log('Enter Number greater than 100');
} else {
    console.error('Correct choice');
}