import GamesApi from "./api";

export const PUBLIC_GAMES_FETCH_REQUEST = "PUBLIC_GAMES_FETCH_REQUEST";
export const PUBLIC_GAMES_FETCH_SUCCESS = "PUBLIC_GAMES_FETCH_SUCCESS";
export const PUBLIC_GAMES_FETCH_FAIL = "PUBLIC_GAMES_FETCH_FAIL";

export const fetch_request = () => {
    return { type: PUBLIC_GAMES_FETCH_REQUEST };
};

export const fetch_success = (games) => {
    return { type: PUBLIC_GAMES_FETCH_SUCCESS, games };
};

export const fetch_fail = (error) => {
    return { type: PUBLIC_GAMES_FETCH_FAIL, error };
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
