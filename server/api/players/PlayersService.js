class PlayersService {
    constructor() {
        this.players = [
            {
                firstName: "Randy",
                lastName: "Moss",
                overall: 99,
                id: 1
            },
            {
                firstName: "Tom",
                lastName: "Brady",
                overall: 99,
                id: 2
            }
        ];
    }
    listPlayers() {
        return {
            data: this.getPlayersFromDatabase()
        };
    }

    getPlayersFromDatabase() {
        return this.players;
    }

    addPlayer(player) {
        this.players.push(player)
        return player;
    }
    updatePlayer(personToUpdate) {
        let id = personToUpdate.id;
        let lastName = personToUpdate.lastName;
        this.players[id-1].lastName = lastName;
        return this.players[id-1];
    }
}



module.exports = PlayersService;