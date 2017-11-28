export const FLASH_SHOW_SUCCESS = "FLASH_SHOW_SUCCESS";
export const FLASH_SHOW_WARNING = "FLASH_SHOW_WARNING";
export const FLASH_SHOW_ERROR = "FLASH_SHOW_ERROR";
export const FLASH_SHOW_DEFAULT = "FLASH_SHOW_DEFAULT";
export const FLASH_HIDE = "FLASH_HIDE";

export const flash_show_success = (message) => {
    return { type: FLASH_SHOW_SUCCESS, message };
};

export const flash_show_warning = (message) => {
    return { type: FLASH_SHOW_WARNING, message };
};

export const flash_show_error = (message) => {
    return { type: FLASH_SHOW_ERROR, message };
};

export const flash_show_default = (message) => {
    return { type: FLASH_SHOW_DEFAULT, message };
};

export const flash_hide = () => {
    return { type: FLASH_HIDE };
};

export const show_success_flash = (msg) => {
    return (dispatch) => {
        return dispatch(flash_show_success(msg));
    };
};

export const show_warning_flash = (msg) => {
    return (dispatch) => {
        return dispatch(flash_show_warning(msg));
    };
};

export const show_error_flash = (msg) => {
    return (dispatch) => {
        return dispatch(flash_show_error(msg));
    };
};

export const show_default_flash = (msg) => {
    return (dispatch) => {
        return dispatch(flash_show_default(msg));
    };
};

export const hide_flash = () => {
    return (dispatch) => {
        return dispatch(flash_hide());
    };
};
