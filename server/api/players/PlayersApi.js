const PlayersService = require("./PlayersService");
exports.plugin = {
    name: "PlayersApi",
    version: "1.0.0",
    register: async function(server, options) {
        const service = new PlayersService();

        server.route({
            method: 'GET',
            path: '/players',
            config: {
                handler: (request, h) => {

                    return service.listPlayers();
                }
            }
        });
        server.route({
            method: 'POST',
            path: '/player',
            config: {
                handler: (request, h) => {


                    return service.addPlayer(request.payload);
                }
            }
        });
        server.route({
            method: 'POST',
            path: '/updateplayer',
            config: {
                handler: (request, h) => {


                    return service.updatePlayer(request.payload);
                }
            }
        });



    }
};