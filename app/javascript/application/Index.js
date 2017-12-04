import React               from "react";
import { Provider }        from "react-intl-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory       from 'history/createBrowserHistory';
import configureStore      from "./initializers/configureStore";

import AppContainer        from "./components/AppContainer";
import "./styles/main.scss";

const history = createHistory();
export const store = configureStore(history);

const Index = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>
);

export default Index;
