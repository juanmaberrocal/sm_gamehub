import React                from "react";
import { withRouter }       from 'react-router-dom';
import { connect }          from "react-redux";
import {
    validate,
    isValid
} from "../../utils/validator";
import { email_signup }     from "../../api/authorizor/actions";
import {
	show_default_flash, 
	show_error_flash
} from "../utils/flash/actions";
import { privateRoot }      from "../../initializers/routes";
import { SYSTEM_MESSAGES }  from "../../utils/messages";

import validationRules      from "./validationRules";
import Signup                from "./Signup";

const buildValidations = (password) => {
	return Object.assign({},
		validationRules,
		{
			password_confirmation: Object.assign({},
				validationRules.password_confirmation,
				validationRules.password_confirmation['match'](password))
		}
	);
};

class SignupContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
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
        const errors = validate(values, buildValidations(values.password));

        if (!isValid(errors)){
            this.setState({
                errors: errors
            });
            return;
        } else {
            const self = this;
            self.props.signup(this.state.email, this.state.password, this.state.password_confirmation)
                .then(() => {
                    if (!self.signupError()){
                        self.signupSuccess();
                    }
                });
        }
    }

    signupSuccess() {
        this.props.showFlash(SYSTEM_MESSAGES.welcome);
        this.props.history.push(privateRoot);
    }

    signupError() {
        const { currentUser } = this.props;
        if (currentUser.error === null){
            return false;
        }

        this.props.showError(currentUser.error.message);
        return true;
    }

    render() {
        return (
            <Signup
                email={this.state.email}
                password={this.state.password}
                password_confirmation={this.state.password_confirmation}
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
        signup: (email, password, password_confirmation) => (dispatch(email_signup(email, password, password_confirmation))),
        showFlash: (msg) => (dispatch(show_default_flash(msg))),
        showError: (msg) => (dispatch(show_error_flash(msg)))
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupContainer))
