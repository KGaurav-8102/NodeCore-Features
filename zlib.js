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
/* const input = 'Geek';

zlib.gzip(input, (err, buffer) => {
	if (!err) {
  
		console.log(buffer.toString('base64'));
	  } 
	  else {
		console.log(err);
	  }
})

console.log("Data Compressed......."); */

//zlib.bytesWrittten

const assert = require('assert');

const input = Buffer.from('0123456789012345678901');


// Calling deflate method
zlib.deflate(input, (err, deflatedBuffer) => {
	assert(!err);
	
	// Declaring buffer and numberRead
	var numberRead = 0;
	var buffers = [];
	
	// Creating a zip object
	var stream = zlib.createGzip()
	
	  // Data event
	  .on('data', function(chunk) {
	   buffers.push(chunk);
	   numberRead += chunk.length;
	  })
	
	  // end event
	  .on('end', function() {
		 
		// Calling bytesWritten property
		console.log(stream.bytesWritten);
		 
		})
	  .end(deflatedBuffer);
  });