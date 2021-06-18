module.exports = (server) => {

    require("./home")(server);
    require("./board")(server);


    require("./admin")(server);   
}