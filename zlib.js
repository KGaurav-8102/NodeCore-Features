// Node.js program to demonstrate	
// zlib.constants property
// Including zlib module
//const zlib = require("zlib");

// Creating a buffer
//const buffer = Buffer.from('eJzT0yMA', 'base64');

// Calling unzip method
/* zlib.unzip(
buffer,

// Using a different Zlib constant
{ finishFlush: zlib.constants.Z_NO_FLUSH },

(err, buffer) => {

	if (!err) {

	console.log(buffer.toString());
	}
	else
	{
	console.log(err);
	}
});

// Calling "constants" property of zlib
zlib.constants; */

/* const zlib = require('zlib');

const fs = require('fs');

const inp = fs.createReadStream('input.txt.gz');
const out = fs.createWriteStream('input.txt');

const brot = zlib.createBrotliDecompress();
inp.pipe(brot).pipe(out);
console.log('Program Completed'); */

/* const zlib = require('zlib');

zlib.gzip('Nidhi Singh', (err, data) => {
	if (err) {
		return console.log('err', err);
	}
	const unzip = zlib.createUnzip();
	unzip.write(data);
	unzip.on('data', function (data)
	 {
		console.log(data.toString());
	});
}) */

/* const zlib = require('zlib');
const fs = require('fs');
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');

const defR = zlib.createDeflateRaw();

inp.pipe(defR).pipe(out);
console.log("Program Completed!"); */

const zlib = require('zlib');
const input = 'Geek';

zlib.gzip(input, (err, buffer) => {
	if (!err) {
  
		console.log(buffer.toString('base64'));
	  } 
	  else {
		console.log(err);
	  }
})

console.log("Data Compressed.......");

