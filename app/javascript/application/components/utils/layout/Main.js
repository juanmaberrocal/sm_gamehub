import React          from "react";
import { withRouter } from 'react-router-dom';
import { connect }    from "react-redux";
import {
    isPublicRoute,
    isPrivateRoute
} from "../../../initializers/routes";

import GridNoUser     from "./GridNoUser";
import GridUser       from "./GridUser";

class Main extends React.Component {
    determineGrid() {
        const path = this.props.location.pathname;

        if (isPublicRoute(path)){
            return (<GridNoUser>{this.props.children}</GridNoUser>);
        } else if (isPrivateRoute(path)){
            return (<GridUser>{this.props.children}</GridUser>);
        } else {
            return (<div>404</div>);
        }
    }

    render() {
        return this.determineGrid();
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        isLoggedIn: state.currentUser.isLoggedIn
    }
);

export default withRouter(connect(mapStateToProps)(Main));
