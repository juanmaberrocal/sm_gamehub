import React               from "react";
import { Route, Redirect } from "react-router";
import { connect }         from "react-redux";
import {
    registrationRoot
} from "../../initializers/routes";

/*
description: check if the current user in the state store
             has already registered
@currentUser: current user state
@return: boolean
*/
const isRegistered = (currentUser) => {
    if (currentUser &&
        currentUser.isRegistered === true){
        return true;
    }
    return false;
};

/*
description:
*/
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = rest;
    const path = rest.path;

    return (
        <Route {...rest} render={props => (
            (isRegistered(currentUser) || path === registrationRoot) ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: registrationRoot, state: {from: path}}} />
            )
        )} />
    );
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser
    }
);

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
