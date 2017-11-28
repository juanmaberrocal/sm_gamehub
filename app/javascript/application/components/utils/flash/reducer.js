import initialState from "../../../initializers/initialState";
import {
    FLASH_SHOW_SUCCESS,
    FLASH_SHOW_WARNING,
    FLASH_SHOW_ERROR,
    FLASH_SHOW_DEFAULT,
    FLASH_HIDE
} from "./actions";

const flash = (state = initialState.flash, action) => {
    switch (action.type){
        case FLASH_SHOW_SUCCESS:
            return Object.assign({}, state, {
                message: action.message,
                isOpen: true,
                type: "success"
            });
        case FLASH_SHOW_WARNING:
            return Object.assign({}, state, {
                message: action.message,
                isOpen: true,
                type: "warning"
            });
        case FLASH_SHOW_ERROR:
            return Object.assign({}, state, {
                message: action.message,
                isOpen: true,
                type: "error"
            });
        case FLASH_SHOW_DEFAULT:
            return Object.assign({}, state, {
                message: action.message,
                isOpen: true,
                type: "default"
            });
        case FLASH_HIDE:
            return Object.assign({}, state, {
                message: "",
                isOpen: false,
                type: "default"
            });
        default:
            return state;
    }
};

export default flash;
