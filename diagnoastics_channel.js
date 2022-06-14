const diagnostics_channel = require('diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

channel.subscribe((message, name) => {
    console.log('Hello World');
})

if (channel.hasSubscribers) {
    channel.publish({
        some:'data'
    });
}