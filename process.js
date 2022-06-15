const process = require('process');

process.on('beforeExit', (code) => {
    console.log('Process beforeexit event with code', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code', code);
})

console.log('This message id displayed first');