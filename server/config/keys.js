//keys.js figure out what set of credentials to return
if(process.env.NODE_ENV === 'production'){
    //we are in production set
    module.exports = require('./prod')
} else {
    //we are in developement set
    module.exports = require('./dev');
}