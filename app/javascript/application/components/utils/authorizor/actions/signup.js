import AuthorizeApi from "../api";

export const EMAIL_SIGNUP_REQUEST = "EMAIL_SIGNUP_REQUEST";
export const EMAIL_SIGNUP_SUCCESS = "EMAIL_SIGNUP_SUCCESS";
export const EMAIL_SIGNUP_FAIL = "EMAIL_SIGNUP_FAIL";

export const email_signup_request = () => {
    return { type: EMAIL_SIGNUP_REQUEST };
};

export const email_signup_success = (user) => {
    return { type: EMAIL_SIGNUP_SUCCESS, user };
};

export const email_signup_fail = (error) => {
    return { type: EMAIL_SIGNUP_FAIL, error };
};

export const email_signup = (email, password, password_confirm) => {
    return (dispatch) => {
        dispatch(email_signup_request());
        return AuthorizeApi.signup(email, password, password_confirm)
            .then((user) => {
                dispatch(email_signup_success(user));
            }).catch((error) => {
                dispatch(email_signup_fail(error));
            });
    };
};
