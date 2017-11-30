import React               from "react";
import { Route, Redirect } from "react-router";
import { withRouter }      from "react-router-dom";
import { connect }         from "react-redux";
import { authorize_token } from "./actions";
import {
	publicRoot,
    registrationRoot,
    isPrivateRoute
} from "../../../initializers/routes";

/*
description: check if the current user in the state store
             has already logged in
@currentUser: current user state
@return: boolean
*/
export const isLoggedIn = (currentUser) => {
    if (currentUser &&
        currentUser.isLoggedIn === true){
        return true;
    }
    return false;
};

/*
description: check if the current user in the state store
             has already registered
@currentUser: current user state
@return: boolean
*/
export const isRegistered = (currentUser) => {
    if (currentUser &&
        currentUser.isRegistered === true){
        return true;
    }
    return false;
};

/*
description:
*/
class Authorizor extends React.Component {
    /*
    description: when component initially mounts
                 send out authorization request
                 this is required to know if a user is logged in
                 at initial application load
    */
	componentWillMount() {
        this.props.authorize();
    }

    /*
    description: check if wrapped components need to be rendered
                 this only needs to happen when 
    return: boolean
    */
    redirectToLogin(currentUser) {
        return (!isLoggedIn(currentUser));
    }

    redirectToRegistration(currentUser, currentPath) {
        return ((isLoggedIn(currentUser) && !isRegistered(currentUser)) &&
            currentPath !== registrationRoot);
    }

    /*
    description: check if wrapped components need to be rendered
                 or if the current user needs to get sent to a different page
    @return: components | null
    */
    render() {
		const { currentUser } = this.props;
        const path = this.props.location.pathname;

        // check if the current user data has been fetched
        // if still fetching do no rendering
        if (typeof currentUser.isLoggedIn === "undefined" ||
            currentUser.fetching === true){
            return null;
        }

        // if user data has been fetched check the state of the current user
        // check if trying to access a private route
        if (isPrivateRoute(path)){
            // if accessing a private route
            // first check if the current user has logged in
            // then check if the current user has finished registering 
            if (this.redirectToLogin(currentUser)){
                // if not logged in boot back to the public root path
                return (<Redirect to={{pathname: publicRoot, state: {from: path}}} />);
            } else if (this.redirectToRegistration(currentUser, path)){
                // if not registered boot back to registration path
                return (<Redirect to={{pathname: registrationRoot, state: {from: path}}} />);
            }
        }

        // if all authentication passes
        // render children components
        return this.props.children;
	}
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        authorize: () => (dispatch(authorize_token()))
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authorizor));
