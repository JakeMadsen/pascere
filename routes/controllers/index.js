module.exports = (server) => {

    require("./home")(server);
    require("./board")(server);

    require("./login")(server);
    require("./admin")(server);   
}