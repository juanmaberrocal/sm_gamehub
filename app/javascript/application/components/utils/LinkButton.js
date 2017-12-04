import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";
import { NavLink }    from "react-router-dom";

import Button      from "material-ui/Button";

const styles = theme => ({
    button: {
    	padding: 0,
    	marginLeft: theme.spacing.unit,
    	'&:hover': {
    		backgroundColor: "transparent"
    	}
    },
    navlink: {}
});

const configs = {};

const LinkButton = (props) => {
    const { children, classes } = props;

    return (
        <Button
        	disableRipple
        	disableFocusRipple
            className={classes.button} >
            <NavLink
            	className={classes.navlink}
            	to={props.to} >
            	{props.text}
            </NavLink>
        </Button>
    )
};

LinkButton.propTypes = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(LinkButton);
