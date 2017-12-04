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

const prettyPrintValue = (value) => {
    switch(typeof value){
        case "string":
            return (value === "" ? " - " : value);
        case "boolean":
            return (value === true ? "Yes" : "No");
        case "object":
            if (value instanceof Array){
                return (value.length === 0 ? " - " : value.join(", "));
            } else {
                return (Object.keys(value).length === 0 ? " - " : value); // TODO: return pretty value
            }
        default:
            return value;
    }
};

const InputReview = (props) => {
    const { label, field, value, classes, ...opts } = props;
    const reviewFieldName = `${field}Review`;
    const prettyValue = prettyPrintValue(value); 

    return (
        <FormControl
            disabled
            className={classes.textField}
            style={props.fullWidth ? {width: "100%"} : {}}>
            <InputLabel
                htmlFor={reviewFieldName}>
                {label}
            </InputLabel>
            <Input
                className={classes.input}
                disableUnderline={true}
                id={reviewFieldName}
                name={reviewFieldName}
                value={prettyValue}
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
