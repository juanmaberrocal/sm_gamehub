import AuthorizeApi from "../api";

export const EMAIL_LOGIN_REQUEST = "EMAIL_LOGIN_REQUEST";
export const EMAIL_LOGIN_SUCCESS = "EMAIL_LOGIN_SUCCESS";
export const EMAIL_LOGIN_FAIL = "EMAIL_LOGIN_FAIL";

export const email_login_request = () => {
    return { type: EMAIL_LOGIN_REQUEST };
};

export const email_login_success = (user) => {
    return { type: EMAIL_LOGIN_SUCCESS, user };
};

export const email_login_fail = (error) => {
    return { type: EMAIL_LOGIN_FAIL, error };
};

export const email_login = (email, password) => {
    return (dispatch) => {
        dispatch(email_login_request());
        return AuthorizeApi.login(email, password)
            .then((user) => {
                dispatch(email_login_success(user));
            }).catch((error) => {
                dispatch(email_login_fail(error));
            });
    };
};
