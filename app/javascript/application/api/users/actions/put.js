import UsersApi from "../api";

export const USERS_PUT_REQUEST = "USERS_PUT_REQUEST";
export const USERS_PUT_SUCCESS = "USERS_PUT_SUCCESS";
export const USERS_PUT_FAIL = "USERS_PUT_FAIL";

export const put_request = () => {
    return { type: USERS_PUT_REQUEST };
};

export const put_success = () => {
    return { type: USERS_PUT_SUCCESS };
};

export const put_fail = () => {
    return { type: USERS_PUT_FAIL };
};

export const put = (id, data) => {
    return (dispatch) => {
        dispatch(put_request());
        return UsersApi.put(id, data)
            .then((user) => {
                dispatch(put_success(user));
            }).catch((error) => {
                dispatch(put_fail(error));
            });
    };
};
