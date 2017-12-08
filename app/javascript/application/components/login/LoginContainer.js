import React               from "react";
import { withRouter }      from 'react-router-dom';
import { connect }         from "react-redux";
import {
    validate,
    isValid
} from "../../utils/validator";
import { email_login }     from "../../api/authorizor/actions";
import {
    show_default_flash,
    show_error_flash
} from "../utils/flash/actions";
import { privateRoot }     from "../../initializers/routes";
import { SYSTEM_MESSAGES } from "../../utils/messages";


import validationRules      from "./validationRules";
import Login                from "./Login";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const field = e.target.id;
        const value = e.target.value;

        let setVal = {};
        setVal[field] = value;

        this.setState(setVal);
    }

    onSubmit(e) {
        e.preventDefault();

        const values = Object.assign({}, this.state);
        const errors = validate(values, validationRules);

        if (!isValid(errors)){
            this.setState({
                errors: errors
            });
            return;
        } else {
            const self = this;
            self.props.login(this.state.email, this.state.password)
                .then(() => {
                    if (!self.loginError()){
                        self.loginSuccess();
                    }
                });
        }
    }

    loginSuccess() {
        this.props.showFlash(SYSTEM_MESSAGES.welcomeBack);
        this.props.history.push(privateRoot);
    }

    loginError() {
        const { currentUser } = this.props;
        if (currentUser.error === null){
            return false;
        }

        this.props.showError(currentUser.error.message);
        return true;
    }

    render() {
        return (
            <Login 
                email={this.state.email}
                password={this.state.password}
                errors={this.state.errors}
                onChange={this.onChange}
                onSubmit={this.onSubmit} />
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
        login: (email, password) => (dispatch(email_login(email, password))),
        showFlash: (msg) => (dispatch(show_default_flash(msg))),
        showError: (msg) => (dispatch(show_error_flash(msg)))
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))
