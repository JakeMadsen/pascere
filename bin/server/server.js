const app = require('./config/server-setup');
const server = require('http').createServer(app)
const serverSettings = JSON.parse(process.env['SERVER_SETTINGS']);
const serverPort = process.env.PORT || serverSettings._serverPort;

//=================== Server initialisation ===================//
/* Executes listening function for WEB server. */
server.listen(serverPort, () => {

    console.log(`======== \x1b[32m SERVER - RUNNING \x1b[0m ======= \n` +
                `Website name   : \x1b[33m ${serverSettings._websiteName} \x1b[0m \n` +
                `Server name    : \x1b[33m ${serverSettings._serverName} \x1b[0m \n` +
                `Server MongoDB connection  : \x1b[33m ${serverSettings._mongoDB} \x1b[0m \n` +
                `Server listening local     : \x1b[36m http://${serverSettings._ipLocalhost}:${serverPort} \x1b[0m \n` +
                `Server listening public    : \x1b[36m http://${serverSettings._ipPublic}:${serverPort} \x1b[0m`);

});