import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Button         from "material-ui/Button";
import Divider        from "material-ui/Divider";
import Snackbar       from "material-ui/Snackbar";
import Typography     from "material-ui/Typography";

const styles = theme => ({
    container: {},
    footer: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between"
    }
});

const configs = {};

const Form = (props) => {
    const { children, classes } = props;

    const header = (
        <div>
            <Typography type="headline" component="h3">
                {props.header}
            </Typography>
            <Divider light />
        </div>
    );

    return (
        <form className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={props.onSubmit} >
            {props.header && header}
            {children}
            <div className={classes.footer} >
                <Button raised
                    className={classes.submit}
                    color="primary"
                    type="submit" >
                    {props.onSubmitText}
                </Button>
            </div>
        </form>
    )
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onSubmitText: PropTypes.string
};

Form.defaultProps = {
    onSubmitText: "Submit"
}

export default withStyles(styles)(Form);
