import React               from "react";
import { connect }         from "react-redux";
import LinkButton     from "../utils/LinkButton";

class PrivateTest extends React.Component {
    render() {
    	console.log("hello?")
        return <LinkButton to="/login" text="Log In Now!" />
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser,
        currentUrl: ownProps.location.pathname
    }
);

export default connect(mapStateToProps)(PrivateTest);
