import { combineReducers } from "redux";
import { intlReducer }     from "react-intl-redux";
import { routerReducer }   from "react-router-redux";
import currentUser         from "../components/utils/authorizor/reducer";
import flash               from "../components/utils/flash/reducer";

const rootReducer = combineReducers({
    router: routerReducer,
    intl: intlReducer,
    currentUser,
    flash
});

export default rootReducer;
