import { createStore, applyMiddleware } from "redux";
import { routerMiddleware }             from "react-router-redux";
import thunk                            from "redux-thunk";
import initialState                     from "./initialState";
import rootReducer                      from "./rootReducer";

export default (history) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    );
};
