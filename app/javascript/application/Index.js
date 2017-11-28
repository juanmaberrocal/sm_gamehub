import React               from "react";
import { Provider }        from "react-intl-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory       from 'history/createBrowserHistory';
import configureStore      from "./initializers/configureStore";

import App                 from "./components/App";
import "./styles/main.scss";

const history = createHistory(),
    store = configureStore(history);

const Index = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

export default Index;
