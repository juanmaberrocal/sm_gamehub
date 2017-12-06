import AuthorizeApi from "../api";

export const AUTHORIZE_TOKEN_REQUEST = "AUTHORIZE_TOKEN_REQUEST";
export const AUTHORIZE_TOKEN_SUCCESS = "AUTHORIZE_TOKEN_SUCCESS";
export const AUTHORIZE_TOKEN_FAIL = "AUTHORIZE_TOKEN_FAIL";

export const authorize_token_request = () => {
    return { type: AUTHORIZE_TOKEN_REQUEST };
};

export const authorize_token_success = (user) => {
    return { type: AUTHORIZE_TOKEN_SUCCESS, user };
};

export const authorize_token_fail = (error) => {
    return { type: AUTHORIZE_TOKEN_FAIL, error };
};

export const authorize_token = () => {
    return (dispatch) => {
        dispatch(authorize_token_request());
        return AuthorizeApi.authorize()
            .then((user) => {
                dispatch(authorize_token_success(user));
            }).catch((error) => {
                dispatch(authorize_token_fail(error));
            });
    };
};
