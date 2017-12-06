import React                   from "react";
import { connect }             from "react-redux";
import { createMuiTheme }      from "material-ui/styles";
import { fetch as fetchGames } from "../api/public/games/actions";

import App                     from "./App";

const baseUrl = "/";
const theme = createMuiTheme();

class AppContainer extends React.Component {
    componentWillMount() {
        // load initial store data
        this.props.fetchGames();
    }

    render() {
        return (
            <App
                baseUrl={baseUrl}
                theme={theme} />
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        fetchGames: () => (dispatch(fetchGames()))
    }
)

export default connect(() => ({}), mapDispatchToProps)(AppContainer);
