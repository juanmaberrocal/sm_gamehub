import UsersApi from "../api";

export const USERS_REGISTER_REQUEST = "USERS_REGISTER_REQUEST";
export const USERS_REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS";
export const USERS_REGISTER_FAIL = "USERS_REGISTER_FAIL";

export const register_request = () => {
    return { type: USERS_REGISTER_REQUEST };
};

export const register_success = (games) => {
    return { type: USERS_REGISTER_SUCCESS, games };
};

export const register_fail = (error) => {
    return { type: USERS_REGISTER_FAIL, error };
};

export const register = (id) => {
    return (dispatch) => {
        dispatch(register_request());
        return UsersApi.register(id)
            .then((user) => {
                dispatch(register_success(user));
            }).catch((error) => {
                dispatch(register_fail(error));
            });
    };
};
