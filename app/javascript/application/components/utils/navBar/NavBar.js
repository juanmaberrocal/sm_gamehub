import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    height: 64,
    width: '100%',
  }
});

const NavBar = (props) => {
    const { classes } = props;

    return (
        <AppBar
            className={classes.root}
            position="fixed"
            color="primary" >
            <Toolbar>
                <Typography type="title" color="inherit">
                    Title
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
