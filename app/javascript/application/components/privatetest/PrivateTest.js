import React               from "react";
import { connect }         from "react-redux";
import LinkButton     from "../utils/LinkButton";

import { apiRequest } from "../../utils/api";

class PrivateTest extends React.Component {

    handleClick(e) {
        e.preventDefault();

        apiRequest("/api/v1/users").then((resp) => {
            console.log(resp)
        }).catch((error) => {
            
        });
    }

    render() {
    	console.log("hello?")
        // return <LinkButton to="/login" text="Log In Now!" />

        return <button onClick={this.handleClick}>Try me</button>
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser,
        currentUrl: ownProps.location.pathname
    }
);

export default connect(mapStateToProps)(PrivateTest);
