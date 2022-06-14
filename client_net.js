const net = require('net');

const client = net.connect({port: 62324}, () => {
    console.log('Connected to the Server');
    client.write('world!\r\n');
})

client.on('data', (data) => {  
    console.log(data.toString());  
    client.end();  
  });  
  client.on('end', () => {  
    console.log('disconnected from server');  
  });  