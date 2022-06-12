// Node.js program to demonstrate the
// cipher.final() method

// Importing crypto module
const crypto = require('crypto');

// Creating and initializing algorithm and password
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// Getting key for the cipher object
const key = crypto.scryptSync(password, 'salt', 24);

// Creating and initializing the static iv
const iv = Buffer.alloc(16, 0);

// Creating and initializing the cipher object
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update('some clear text data', 'utf-8', 'hex');



// Getting buffer value
// by using final() method
encrypted += cipher.final('hex');

// Display the result
console.log(encrypted); 

//crypto.getCipher()
const crypto = require('crypto');

//const cipher = crypto.getCiphers();

console.log("The list of algorithms are as follows: ", cipher);

//crypto.decipheriv();

const crypto = require('crypto');
//const algorithm = 'aes-256-cbc';

//const key = crypto.randomBytes(32);

//const iv = crypto.randomBytes(16);

//const encrypt = (text) => {
    //let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    //let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    //return { iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex')// };
//}

//const decrypt  = (text) => {
    //let iv = Buffer.from(text.iv, 'hex');
    let encryptedText =
       Buffer.from(text.encryptedData, 'hex');
       let decipher = crypto.createDecipheriv(
        'aes-256-cbc', Buffer.from(key), iv); 
        // Updating encrypted text
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        
        // returns data after decryption
       // return decrypted.toString();
//} 


// Encrypts output
var output = encrypt("GeeksforGeeks");
console.log(output);
  
// Decrypts output
console.log(decrypt(output));


//crypto.cipheriv()

const crypto = require('crypto');

//const algorithm = 'aes-256-cbc';

//const key = crypto.randomBytes(32);

//const iv = crypto.randomBytes(16);

const encrypt = (text) => {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex') };
}

var output = encrypt('GeeksforGeeks');
console.log(output);

//crypto.getDiffieHellMan()

const crypto = require('crypto');

const diffiehellmangrp = crypto.getDiffieHellman('modp14');
console.log("Key exchange object : ", diffiehellmangrp);

//crypto.createHmax()

const crypto = require('crypto');

const secret = 'GfG';

const hash = crypto.createHmac('sha256',  secret).update('GeeksforGeeks').digest('hex');

console.log(hash);

//crypto.createECDH()
const crypto = require('crypto');
const curv = crypto.createECDH('secp521r1');
curv.generateKeys();

// Prints Public key
console.log("Public Key: ", curv.getPublicKey());
  
// Prints Private Key
console.log("Private Key :", curv.getPrivateKey());

//crypto.randomBytes()

const crypto = require('crypto');
crypto.randomBytes(127, (err, buf) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("The random data is: "
             + buf.toString('hex'));
})