import initialState from "../../initializers/initialState";
import {
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL
} from "./actions";

const user = (state = initialState.currentUser, action) => {
    switch (action.type){
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isRegistered: true,
                fetching: false,
                error: null
            });
        case REGISTER_FAIL:
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
