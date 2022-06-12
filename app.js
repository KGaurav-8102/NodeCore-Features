const http = require('http');

var options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
}

http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
}).end();