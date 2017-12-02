import { intl } from "./localization";

export default {
    intl,
    flash: {
        message: "",
        isOpen: false,
        type: "default"
    },
    currentUser: {
        isLoggedIn: undefined,
        isRegistered: null,
        user: null,
        fetching: false,
        error: null
    },
    games: {
        data: [],
        fetching: false,
        error: null
    }
};
