import React from 'react';
import { withRouter }       from 'react-router-dom';
import { connect }          from "react-redux";
import { isRegistered }     from "../utils/authorizor/Authorizor";

import { privateRoot }      from "../../initializers/routes";

import Registration                from "./Registration";

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     const { currentUser } = this.props;
    //     if (isRegistered(currentUser)){
    //         this.props.history.push(privateRoot);
    //     }
    // }

    render() {
        return (
            <Registration />
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser,
        currentUrl: ownProps.location.pathname
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        // signup: (email, password, password_confirmation) => (dispatch(email_signup(email, password, password_confirmation))),
        // showFlash: (msg) => (dispatch(show_default_flash(msg))),
        // showError: (msg) => (dispatch(show_error_flash(msg)))
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer));
