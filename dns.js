const dns = require('dns');

const website = "www.instagram.com";

dns.lookup(website, (err, address, family) => {
    console.log('address of family', website, address, family)
});

console.log(dns.getServers());