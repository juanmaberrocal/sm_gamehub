import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Divider        from "material-ui/Divider";
import TextField      from "material-ui/TextField";
import Typography     from "material-ui/Typography";

import Form           from "../utils/Form";
import LinkButton     from "../utils/LinkButton";

const styles = theme => ({
    root: {}
});

const Login = (props) => {
    const { classes, errors } = props;

    return (
        <div>
            <Form header="Welcome to the Hub!"
                onSubmit={props.onSubmit}
                onSubmitText="Log In!" >
                <TextField
                    required
                    id="email"
                    label="Email"
                    margin="normal"
                    fullWidth={true}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                    value={props.email}
                    onChange={props.onChange} />
                <TextField
                    required
                    type="password"
                    id="password"
                    label="Password"
                    margin="normal"
                    fullWidth={true}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                    value={props.password}
                    onChange={props.onChange} />
            </Form>
            <Divider light />
            <br/>
            <Typography type="body1" component="p">
                Not a member?
                <LinkButton to="/signup" text="Sign Up Now!" />
            </Typography>
        </div>
    );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);
