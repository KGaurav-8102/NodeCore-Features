// Node.js program to demonstrate	
// zlib.constants property
// Including zlib module
const zlib = require("zlib");

// Creating a buffer
const buffer = Buffer.from('eJzT0yMA', 'base64');

// Calling unzip method
zlib.unzip(
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
zlib.constants;
