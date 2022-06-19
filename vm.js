// Node.js program to demonstrate the	
// Constructor: new vm.Script() method

// Including vm and util module
const vm = require('vm');
/*
// Creating context
const context = {
number: 2
};

// Calling the constructor
const script = new vm.Script('Type = "Int"; number *= 2;');

// Contextifying object
vm.createContext(context);

// Calling runInContext method
script.runInContext(context);

// Displays output
console.log(context); */

//craete script.craetecachedData()

const script = new vm.Script(`
    const add = (a, b) => {
        return a + b;
    }
    const x = add(1, 2);
`)

const cachedWithoutX = script.createCachedData();
console.log(cachedWithoutX);