const serverHost = require('ip');
var fs = require('fs')

class serverSettings {
    constructor(){
        this._ipPublic      = serverHost.address();
        this._ipLocalhost   = "localhost";
        this._serverName;
        this._serverPort;
        this._mongoDB;
        this._websiteName;

        this.getServerSettings()
    }

    async getServerSettings(){
        if(fs.existsSync(__dirname + '/server-settings.json')){
            let settings = JSON.parse(fs.readFileSync(__dirname + '/server-settings.json', 'utf8'));
            this._serverName    = settings.serverName;
            this._serverPort    = settings.serverPort;
            this._mongoDB       = settings.mongoDB;
            this._websiteName   = settings.websiteName;
        }else {
            try {
                console.log("Trying")
                let setupSettings = require('./first-time-setup');
                let settings = await setupSettings.serverSetup();
                this._serverName    = settings.serverName;
                this._serverPort    = settings.serverPort;
                this._mongoDB       = settings.mongoDB;
                this._websiteName   = settings.websiteName;
            } catch (error) {

                console.log("readline-sync does not work with nodemon!")
                console.log("Error")
                console.log(error)
            }
           
        }
    }
}

module.exports = serverSettings