//Buffer new

cbuf = new Buffer(256);
bufflen = cbuf.write('GreeksforGreeks');
console.log("Number of octets in which string is written: " + bufflen);

//Buffer length

 rbuf = new Buffer(26);
var j;

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
    rbuf[j] = i;
}

console.log( rbuf.toString('utf-8', 3 , 9));

//Buffer.copy()
var buffer2 = Buffer.from('for');
var buffer1 = Buffer.from('GeeksforGeeks');

buffer2.copy(buffer1, 5, 2);
console.log(buffer1.toString());

var buffer2 = Buffer.allocUnsafe(5);
var buffer1 = Buffer.from('Geeks');

for (let i = 0; i < 5; i++) {
    buffer2[i] = i + 97;
}

buffer2.copy(buffer1, 2);

console.log(buffer1.toString());

//Buffer.includes()

//const buf = new Buffer('Geek one');
console.log(buf.includes('Geek'));

//const buffer = Buffer.from('GeeksforGeeks: A Computer Science Portal');
const output = buffer.includes('Geek', 15);

console.log(output);

//Buffer.compare()

var buffer1 = Buffer.from('Geek');
var buffer2 = Buffer.from('Geek');

var op = Buffer.compare(buffer1, buffer2);
console.log(op);

var buffer1 = Buffer.from('GFG');
var buffer2 = Buffer.from('Python');

var op = Buffer.compare(buffer1, buffer2);
console.log(op); 

var buffer1 = Buffer.from('2');
var buffer2 = Buffer.from('1');
var buffer3 = Buffer.from('3');

var array = [buffer1, buffer2, buffer3];

console.log(array);

console.log(array.sort(Buffer.compare)); 

//Buffer.alloc()

var buffer = Buffer.alloc(6);
console.log(buffer);

//Buffer.equal();
var buffer1 = Buffer.from('Hi');
var buffer2 = Buffer.from('Hi');

console.log(buffer1.equals(buffer2));

//Buffer.subarray()

//const buf = Buffer.from('GeeksforGeeks', 'ascii');

console.log("Original buffer is: " + buf);

cropped_buf = buf.subarray(5, 10); 

console.log("Cropped buffer is: " + cropped_buf);

cropped_buf[0] = 70;
cropped_buf[1] = 79;
cropped_buf[2] = 82;

console.log('Cropped buffer after modification is:' + cropped_buf);

console.log("Original buffer after modification is: " + buf);

//Buffer.readIntBE()

const buff = Buffer.from([0x11, 0x12, 0x34, 0x56, 0x89, 0xcd]);

console.log(buff.readIntBE(0, 5).toString(16));

console.log(buff.readIntBE(0, 4).toString(16));

//Buffer.write();

var buf = Buffer.from('GeeksforGeeks');

buffer.write('EE', 1);

console.log(buf.toString());