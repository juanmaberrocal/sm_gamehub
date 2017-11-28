import { intl } from "./localization";

export default {
    intl,
    currentUser: {
        isLoggedIn: undefined,
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
