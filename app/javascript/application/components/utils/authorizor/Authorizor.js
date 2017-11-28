import React               from "react";
import { Route, Redirect } from "react-router";
import { withRouter }      from "react-router-dom";
import { connect }         from "react-redux";
import { authorize_token } from "./actions";
import {
	publicRoot,
    isPrivateRoute
} from "../../../initializers/routes";

const isLoggedIn = (currentUser) => {
    if (currentUser &&
        currentUser.isLoggedIn === true){
        return true;
    }
    return false;
};

class RoutePrivate extends React.Component {
	componentWillMount() {
        this.props.authorize();
	}

	render() {
		const { currentUser } = this.props;
        const path = this.props.location.pathname;

        if (typeof currentUser.isLoggedIn === "undefined" ||
            currentUser.fetching === true){
            return null;
        }

        if (!isLoggedIn(currentUser) && isPrivateRoute(path)){
            return (<Redirect to={{pathname: publicRoot, state: {from: path}}} />);
        }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutePrivate));
