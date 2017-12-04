import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import { FormControl }       from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 0,
        marginBottom: 0,
        width: 200
    },
    input: {
        color: theme.palette.text.primary
    }
});

const configs = {};

const InputReview = (props) => {
    const { label, field, value, classes, ...opts } = props;

    return (
        <FormControl
            disabled
            className={classes.textField}
            style={props.fullWidth ? {width: "100%"} : {}}>
            <InputLabel
                htmlFor={`${props.field}Review`}>
                {props.label}
            </InputLabel>
            <Input
                className={classes.input}
                disableUnderline={true}
                id={`${props.field}Review`}
                name={`${props.field}Review`}
                value={props.value}
                {...opts} />
        </FormControl>
    );
};

InputReview.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

export default withStyles(styles)(InputReview);
