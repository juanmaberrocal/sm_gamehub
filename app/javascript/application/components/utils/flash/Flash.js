import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Snackbar       from "material-ui/Snackbar";
import IconButton     from 'material-ui/IconButton';
import CloseIcon      from 'material-ui-icons/Close';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 2
    },
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4
    }
});

const configs = {
    anchor: { vertical: "top", horizontal: "center" },
    autoHide: 6000
};

const Flash = (props) => {
    const { classes } = props;
    
    return (
        <Snackbar
            className={classes.root}
            anchorOrigin={configs.anchor}
            autoHideDuration={configs.autoHide}
            onRequestClose={props.handleClose}
            open={props.isOpen ? true : false}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{props.message}</span>}
            action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  className={classes.close}
                  onClick={props.handleClose} >
                  <CloseIcon />
                </IconButton>
            ]} />
    );
}

Flash.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Flash);
