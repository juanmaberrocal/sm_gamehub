import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Grid           from "material-ui/Grid";
import logo           from "../../images/logo_full.png";

const styles = theme => ({
    root: {
        height: 150,
        textAlign: "center"
    },
    logo: {
        height: "100%",
        width: "auto",
        maxWidth: "100%"
    }
});

const configs = {
    item: {
        size: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 12
        }
    },
    image: {
        src: logo,
        name: "SM_GameHub_logo_full"
    }
};

const LogoFull = (props) => {
    const { children, classes } = props;

    return (
        <Grid item
            className={classes.root} 
            xs={configs.item.size.xs}
            sm={configs.item.size.sm}
            md={configs.item.size.md}
            lg={configs.item.size.lg}
            xl={configs.item.size.xl} >
            <img src={configs.image.src} 
                className={classes.logo}
                alt={configs.image.name} />
        </Grid>
    )
};

LogoFull.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogoFull);
