
const querystring = require('querystring');

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');