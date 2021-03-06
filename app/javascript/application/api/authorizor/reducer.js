import initialState from "../../initializers/initialState";
import {
    EMAIL_SIGNUP_REQUEST, EMAIL_SIGNUP_SUCCESS, EMAIL_SIGNUP_FAIL,
    EMAIL_LOGIN_REQUEST, EMAIL_LOGIN_SUCCESS, EMAIL_LOGIN_FAIL,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL,
    AUTHORIZE_TOKEN_REQUEST, AUTHORIZE_TOKEN_SUCCESS, AUTHORIZE_TOKEN_FAIL
} from "./actions";

const authorizor = (state = initialState.currentUser, action) => {
    switch (action.type){
        case EMAIL_SIGNUP_REQUEST:
        case EMAIL_LOGIN_REQUEST:
        case LOGOUT_REQUEST:
        case AUTHORIZE_TOKEN_REQUEST:
            return Object.assign({}, state, {
                fetching: true
            });
        case EMAIL_SIGNUP_SUCCESS:
        case EMAIL_LOGIN_SUCCESS:
        case AUTHORIZE_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                isRegistered: !!action.user.registeredAt,
                user: action.user,
                fetching: false,
                error: null
            });
        case EMAIL_SIGNUP_FAIL:
        case EMAIL_LOGIN_FAIL:
        case AUTHORIZE_TOKEN_FAIL:
            return Object.assign({}, state, {
                isLoggedIn: false,
                isRegistered: null,
                user: null,
                fetching: false,
                error: action.error
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: false,
                isRegistered: null,
                user: null,
                fetching: false,
                error: null
            });
        case LOGOUT_FAIL:
            return Object.assign({}, state, {
                fetching: false,
                error: action.error
            });
        default:
            return state;
    }
};

export default authorizor;
