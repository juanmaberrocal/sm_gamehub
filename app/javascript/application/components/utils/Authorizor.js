import React               from "react";
import { Route, Redirect } from "react-router";
import { withRouter }      from "react-router-dom";
import { connect }         from "react-redux";
import { authorize_token } from "../../api/authorizor/actions";
import {
	publicRoot,
    registrationRoot,
    isPrivateRoute
} from "../../initializers/routes";

/*
description: check if the current user in the state store
             has been initialized
@currentUser: current user state
@return: boolean
*/
export const isInitialized = (currentUser) => {
    if (currentUser &&
        typeof currentUser.isLoggedIn !== "undefined"){
        return true;
    }
    return false;
};

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
    description: check if component really needs to be rerendered
                 since the authorizor is just a wrapper for the routes that
                 require a user to be logged in, its rerender is only necessary
                 when a user logs in and out
    @nextProps:
    @nextState:
    @return: boolean
    */
    shouldComponentUpdate(nextProps, nextState) {
        // rerending of component should only occur when user log in state changes
        if (this.props.currentUser.isLoggedIn !== nextProps.currentUser.isLoggedIn){
            return true;
        }

        // by default do not rerender when user data is changed
        return false;
    }

    /*
    description: check if wrapped components need to be rendered
                 or if the current user needs to get sent to a different page
    @return: components | null
    */
    render() {
		const { currentUser } = this.props;
        const path = this.props.location.pathname;

        // wait until initial authorization is finished before
        // deciding which routes will be need to be rendered
        if (!isInitialized(currentUser)){ return null; }

        // check if user is logged in
        // if not logged in we need to check if we have to boot the user back to login
        // or just hide the authorized routes
        if (!isLoggedIn(currentUser)){
            if (isPrivateRoute(path)){
                return (<Redirect to={{pathname: publicRoot, state: {from: path}}} />);
            }

            return null;
        }

        // if user is logged in then authorized routes are available
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
