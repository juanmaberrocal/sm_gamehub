import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Divider        from "material-ui/Divider";
import TextField      from "material-ui/TextField";
import Typography     from "material-ui/Typography";
import Form           from "../utils/Form";
import GridNoUser     from "../utils/layout/GridNoUser";
import LinkButton     from "../utils/LinkButton";

const styles = theme => ({
    root: {}
});

const Registration = (props) => {
    const { classes, errors } = props;

    return (
        <div className={classes.root}>
            register me!
        </div>
    );
}

Registration.propTypes = {};

export default withStyles(styles)(Registration);
