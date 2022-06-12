const { type } = require('os');

const assert = require('assert').strict;
//Assertion Function
 try {
    assert(1)
    console.log("No Error Occured")
} catch (error) {
    console.log('Error:', error);
} 

//Assertion deep StrictEqual function

 try {
    assert.deepStrictEqual({a: '5'}, {a: '5'})
    console.log('No Error Occured')
} catch (error) {
    console.log("Error:", error);
} 

//Assertion assert.doesNotThrow(fn[, error][, message])

try {
    assert.doesNotThrow(
        () => {
            throw new TypeError('Wrong Value');
        }
    )
} catch (error) {
    console.log('Error:', error);
} 

try {
    assert.doesNotThrow(
        () => {
            throw new TypeError('The wrong value error');
        },
        /abcd/, 'whoops!'
    )
} catch (error) {
    console.log('Error:', error);
} 

//Assert Equal

var a = 20;
var b = 30;

try {
    assert.equal(a, b)
} catch (error) {
    console.log('Error:', error)
}

var a = 20;
var b = 20;

try {
    assert.equal(a, b)
    console.log('No Error occured');
} catch (error) {
    console.log('Error:', error)
} 

//Assert.ifError() Function  use

try {
    assert.ifError(null)
    console.log('No Error Occured')
} catch (error) {
    console.log('Error:', error)
}

//Assert.match

try {
    assert.match('I will try to pass', /fail/)
} catch (error) {
    console.log('Error:', error)
}
try {
    assert.match('I am good', /good/);
    console.log('Error NBot found')
} catch (error) {
    console.log('Error:', error)
} 

//Assert.notDeepEqual()

try {
    assert.notDeepEqual({a: '5'}, {a : '5'})
} catch (error) {
    console.log('Error:', error)    
} 

try {
    assert.notDeepEqual({a : '5'}, {a: '11'})
    console.log('no error found')
} catch (error) {
    console.log('Error:', error)
} 

//Assert.notDeepStrictEqual()

try {
    assert.notDeepStrictEqual({a: '5'}, {a: '11'})
    console.log('No Error Founded')
} catch (error) {
    console.log('Error:', error)
} 

try {
    assert.notDeepStrictEqual({a: '5'}, {a: '5'})
} catch (error) {
    console.log('Error:', error)
}

//Assert.notEqual()

var a = 20;
var b = 20;

try {
    assert.notEqual(a, b)
} catch (error) {
    console.log('Error:', error)
}

var a = 20;
var b = 30;

try {
    assert.notEqual(a, b)
    console.log('No Error Founded')
} catch (error) {
    console.log('Error:', error)
}

//Assert.ok()

try {
    assert.ok(false, "It's false!")
} catch (error) {
    console.log('Error:', error)
} 

//Assert.rejects()

(async () => {
    assert.strictEqual(1, 2)
    await assert.rejects(
        async () => {
            throw new TypeError('Wrong value')
        },
        (err) => {
            assert.strictEqual(err.name, 'TypeError');
            assert.strictEqual(err.message,  'Wrong Value');
            return type;
        }
    ).then(() => {
        console.log('Rejects Demo')
    })
})();

