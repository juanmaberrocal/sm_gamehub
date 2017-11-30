import React          from "react";
import { withRouter } from 'react-router-dom';
import { connect }    from "react-redux";
import {
    isPrivateRoute
} from "../../../initializers/routes";

import NavBar         from "./NavBar";

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    displayNavBar() {
        const path = this.props.location.pathname;
        return isPrivateRoute(path);
    }

    render() {
        return (this.displayNavBar() ? <NavBar /> : null);
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser
    }
);

const mapDispatchToProps = (dispatch) => (
    {
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));
