import { store } from "../Index";

export const storeGames = () => {
    return store.getState().games.data;
};

export const getGameNames = (gameIds) => {
    let gameNames = [];

    for (let i =0; i < gameIds.length; i++){
        let gameName = getGameName(gameIds[i]);

        if (typeof gameName !== "undefined"){
            gameNames.push(gameName);
        }
    }

    return gameNames;
};

export const getGameName = (gameId) => {
    const games = storeGames();
    let gameName;

    for (let i = 0; i < games.length; i++){
        const storeGame = games[i];
        if (parseInt(storeGame.id, 10) === parseInt(gameId, 10)) {
            gameName = storeGame.name;
            break;
        }
    }

    return gameName;
};
