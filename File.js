// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), (err) => {
	if (err) {
		return console.error(err);
	}
	console.log('Directory created successfully!');
});














// Node.js program to demonstrate the
// fs.existsSync() method

// Import the filesystem module
/* const fs = require('fs');

// Get the current filenames
// in the directory
getCurrentFilenames();

let fileExists = fs.existsSync('hello.txt');
console.log("hello.txt exists:", fileExists);

fileExists = fs.existsSync('world.txt');
console.log("world.txt exists:", fileExists);

// Function to get current filenames
// in directory
function getCurrentFilenames() {
console.log("\nCurrent filenames:");
fs.readdirSync(__dirname).forEach(file => {
	console.log(file);
});
console.log("\n");
} */


/* fs.exists('index.txt', (exists) => {
    console.log(exists ? 'Found' : 'Not Found!')
}); */
/* const buf = new Buffer(1024);

console.log("Opening a existing file");
fs.open('input.txt', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("reading the file");
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err){
            console.log(err);
         }
         console.log(bytes + " bytes read");
         // Print only read bytes to avoid junk.
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
     }
    })
}) */

/* fs.readFile('input.txt', (err, data) => {
    if(err) {
        console.error(err);
    } else {
        console.log("Asynchronous read: " + data.toString());
    }
}); */