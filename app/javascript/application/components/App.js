import React                           from "react";
import { Route }                       from "react-router";
import { BrowserRouter }               from "react-router-dom";
import { publicRoutes, privateRoutes } from "../initializers/routes";

import Authorizor                      from "./utils/authorizor/Authorizor";
import FlashContainer                  from "./utils/flash/FlashContainer";

import {
    MuiThemeProvider,
    createMuiTheme
} from "material-ui/styles";

// eslint-disable-next-line no-undef
const baseUrl = "/";
const theme = createMuiTheme();

const App = () => (
    <BrowserRouter basename={baseUrl}>
        <MuiThemeProvider theme={theme}>
            <FlashContainer />
            <div className="wrapper">
                <div className="main">
                    {publicRoutes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            strict={route.strict}
                            component={route.component} />
                    ))}

                    <Authorizor>
                        {privateRoutes.map((route, i) => (
                            <Route
                                key={i}
                                path={route.path}
                                exact={route.exact}
                                strict={route.strict}
                                component={route.component} />
                        ))}
                    </Authorizor>
                </div>
            </div>
        </MuiThemeProvider>
     </BrowserRouter>
);

export default App;
