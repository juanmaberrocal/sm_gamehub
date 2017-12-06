import initialState from "../../../initializers/initialState";
import {
    PUBLIC_GAMES_FETCH_REQUEST, PUBLIC_GAMES_FETCH_SUCCESS, PUBLIC_GAMES_FETCH_FAIL
} from "./actions";

const games = (state = initialState.games, action) => {
    switch (action.type){
        case PUBLIC_GAMES_FETCH_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            });
        case PUBLIC_GAMES_FETCH_SUCCESS:
            return Object.assign({}, state, {
                data: action.games,
                fetching: false,
                error: null
            });
        case PUBLIC_GAMES_FETCH_FAIL:
            return Object.assign({}, state, {
                data: [],
                fetching: false,
                error: action.error
            });
        default:
            return state;
    }
};

export default games;
