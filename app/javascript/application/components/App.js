import React                           from "react";
import PropTypes                       from "prop-types";
import { Route }                       from "react-router";
import { BrowserRouter }               from "react-router-dom";
import { publicRoutes, privateRoutes } from "../initializers/routes";

import { MuiThemeProvider }            from "material-ui/styles";
import Wrapper                         from "./utils/layout/Wrapper";
import Main                            from "./utils/layout/Main";
import Authorizor                      from "./utils/Authorizor";
import PrivateRoute                    from "./utils/PrivateRoute";

const App = (props) => (
    <BrowserRouter basename={props.baseUrl}>
        <MuiThemeProvider theme={props.theme}>
            <Wrapper>
                <Main>
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
                            <PrivateRoute
                                key={i}
                                path={route.path}
                                exact={route.exact}
                                strict={route.strict}
                                component={route.component} />
                        ))}
                    </Authorizor>
                </Main>
            </Wrapper>
        </MuiThemeProvider>
     </BrowserRouter>
);

App.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default App;
