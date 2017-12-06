import { combineReducers } from "redux";
import { intlReducer }     from "react-intl-redux";
import { routerReducer }   from "react-router-redux";
import flash               from "../components/utils/flash/reducer";
import authorizor          from "../api/authorizor/reducer";
import user                from "../api/users/reducer";
import games               from "../api/public/games/reducer";

const reduceReducers = (...reducers) => {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous
    );
};

const rootReducer = combineReducers({
    router: routerReducer,
    intl: intlReducer,
    flash,
    currentUser: reduceReducers(authorizor, user),
    games
});

export default rootReducer;
