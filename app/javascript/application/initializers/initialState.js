import { intl } from "./localization";

export default {
    intl,
    currentUser: {
        isLoggedIn: undefined,
        isRegistered: null,
        user: null,
        fetching: false,
        error: null
    },
    flash: {
    	message: "",
    	isOpen: false,
    	type: "default"
    }
};
