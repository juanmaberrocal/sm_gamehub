import initialState from "../../initializers/initialState";
import {
    USERS_PUT_REQUEST, USERS_PUT_SUCCESS, USERS_PUT_FAIL,
    USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS, USERS_REGISTER_FAIL
} from "./actions";

const user = (state = initialState.currentUser, action) => {
    switch (action.type){
        case USERS_PUT_REQUEST:
        case USERS_REGISTER_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            });
        case USERS_PUT_SUCCESS:
            return Object.assign({}, state, {
                user: action.user,
                fetching: false,
                error: null
            });
        case USERS_PUT_FAIL:
            return Object.assign({}, state, {
                fetching: false,
                error: action.error
            });
        case USERS_REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isRegistered: true,
                fetching: false,
                error: null
            });
        case USERS_REGISTER_FAIL:
            return Object.assign({}, state, {
                isRegistered: false,
                fetching: false,
                error: action.error
            });
        default:
            return state;
    }
};

export default user;
