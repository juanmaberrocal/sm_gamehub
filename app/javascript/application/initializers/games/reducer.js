import initialState from "../initialState";
import {
    FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL
} from "./actions";

const games = (state = initialState.games, action) => {
    switch (action.type){
        case FETCH_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            });
        case FETCH_SUCCESS:
            return Object.assign({}, state, {
                data: action.games,
                fetching: false,
                error: null
            });
        case FETCH_FAIL:
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
