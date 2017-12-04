import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import {
    FormControlLabel,
    FormGroup,
    FormHelperText
} from "material-ui/Form";
import TextField      from "material-ui/TextField";
import Switch         from "material-ui/Switch";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      switchField: {
        width: 200
      },
      fullWidth: {
        width: "100%",
        marginBottom: theme.spacing.unit * 2
      },
      denseHelper: {
        margin: 0
      }
});

class StepOne extends React.Component {
    render() {
        const { classes } = this.props;
        const { formData, formErrors} = this.props;

        return (
            <div className={classes.container}>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Full Name"
                    className={classes.textField}
                    margin="normal"
                    fullWidth={false}
                    value={formData.name}
                    error={formErrors.name ? true : false}
                    onChange={this.props.onChange} />
                <TextField
                    required
                    id="nickname"
                    name="nickname"
                    label="Nickname"
                    className={classes.textField}
                    margin="normal"
                    fullWidth={false}
                    value={formData.nickname}
                    error={formErrors.nickname ? true : false}
                    onChange={this.props.onChange} />
                <div className={classes.fullWidth}>
                    <FormGroup>
                        <FormControlLabel
                            className={classes.switchField}
                            control={
                                <Switch
                                    inputProps={{id: "useFullName", name: "useFullName"}}
                                    checked={formData.useFullName}
                                    onChange={this.props.onCheck} />
                            }
                            label="Use Full Name" />
                            <FormHelperText
                                className={classes.denseHelper}>
                                You can make your name public to all the players of the Hub by selecting this option.<br/>
                                If you wish to only display your nickname instead, leave this unselected.
                            </FormHelperText>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

StepOne.propTypes = {
  classes: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired
};

export default withStyles(styles)(StepOne);
