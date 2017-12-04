import UsersApi from "./api";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register_request = () => {
    return { type: REGISTER_REQUEST };
};

export const register_success = (games) => {
    return { type: REGISTER_SUCCESS, games };
};

export const register_fail = (error) => {
    return { type: REGISTER_FAIL, error };
};

export const register = (id) => {
    return (dispatch) => {
        dispatch(register_request());
        return UsersApi.register(id)
            .then((user) => {
                // dispatch(register_success(user));
            }).catch((error) => {
                // dispatch(register_fail(error));
            });
    };
};
