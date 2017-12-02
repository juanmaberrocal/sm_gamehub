import { combineReducers } from "redux";
import { intlReducer }     from "react-intl-redux";
import { routerReducer }   from "react-router-redux";
import flash               from "../components/utils/flash/reducer";
import currentUser         from "../components/utils/authorizor/reducer";
import games               from "./games/reducer";

const rootReducer = combineReducers({
    router: routerReducer,
    intl: intlReducer,
    flash,
    currentUser,
    games
});

export default rootReducer;
