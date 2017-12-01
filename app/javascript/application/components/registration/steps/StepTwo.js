import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Divider        from "material-ui/Divider";
import {
    FormControlLabel,
    FormGroup,
    FormHelperText
} from "material-ui/Form";
import TextField      from "material-ui/TextField";
import Typography     from 'material-ui/Typography';
import Switch         from "material-ui/Switch";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 0,
        marginBottom: theme.spacing.unit * 2,
        width: 400,
      },
      switchField: {
        width: 400
      },
      fullWidth: {
        width: "100%",
        marginBottom: theme.spacing.unit * 2
      },
      denseHelper: {
        margin: 0
      }
});

const configs = {
    bodyTypography: "body1"
};

class stepTwo extends React.Component {
    render() {
        const { classes } = this.props;
        const { formData, formErrors} = this.props;

        return (
            <div className={classes.container}>
                <Typography
                    type={configs.bodyTypography}
                    className={classes.fullWidth}>
                    To receive the best experience from the GameHub,
                    it's highly recommended that you join the Slack "workspace" associated.<br/>
                    If you wish to receive an invitation to join, please check the following option.
                </Typography>
                <div className={classes.fullWidth}>
                    <FormGroup>
                        <FormControlLabel
                            className={classes.switchField}
                            control={
                                <Switch
                                    inputProps={{id: "sendSlackInvite"}}
                                    checked={this.props.formData.sendSlackInvite}
                                    onChange={this.props.onCheck} />
                            }
                            label="Yes, I want to receive an invitation." />
                            <FormHelperText
                                className={classes.denseHelper}>
                                By opting in, you are explicitly agreeing to allowing SM GameHub to use your email for communication purposes.
                            </FormHelperText>
                    </FormGroup>
                </div>
                <br/>
                <Divider light
                    className={classes.fullWidth} />
                <br/>
                <Typography
                    type={configs.bodyTypography}
                    className={classes.fullWidth}
                    style={{marginBottom: 0}}>
                    If you have already received an invitation prior to signing up and registering,
                    please fill in your Slack handler below to activate the integration.
                </Typography>
                <TextField
                    id="slackHandler"
                    label="@Slack"
                    className={classes.textField}
                    margin="normal"
                    fullWidth={false}
                    value={formData.slackHandler}
                    error={formErrors.slackHandler ? true : false}
                    onChange={this.props.onChange} />
            </div>
        )
    }
}

stepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired
};

export default withStyles(styles)(stepTwo);
