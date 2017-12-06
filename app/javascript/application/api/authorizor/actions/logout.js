import AuthorizeApi from "../api";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const logout_request = () => {
    return { type: LOGOUT_REQUEST };
};

export const logout_success = (user) => {
    return { type: LOGOUT_SUCCESS };
};

export const logout_fail = (error) => {
    return { type: LOGOUT_FAIL, error };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(logout_request());
        return AuthorizeApi.logout()
            .then(() => {
                dispatch(logout_success());
            }).catch((error) => {
                dispatch(logout_fail(error));
            });
    };
};
