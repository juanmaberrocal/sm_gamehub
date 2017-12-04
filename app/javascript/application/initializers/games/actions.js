import GamesApi from "./api";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetch_request = () => {
    return { type: FETCH_REQUEST };
};

export const fetch_success = (games) => {
    return { type: FETCH_SUCCESS, games };
};

export const fetch_fail = (error) => {
    return { type: FETCH_FAIL, error };
};

export const fetch = () => {
    return (dispatch) => {
        dispatch(fetch_request());
        return GamesApi.fetch()
            .then((games) => {
                dispatch(fetch_success(games));
            }).catch((error) => {
                dispatch(fetch_fail(error));
            });
    };
};
