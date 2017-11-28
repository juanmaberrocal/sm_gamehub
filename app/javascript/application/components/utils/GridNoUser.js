import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Grid           from "material-ui/Grid";
import Paper          from "material-ui/Paper";
import LogoFull       from "./LogoFull";

const styles = theme => ({
    root: {
        height: "100%",
        backgroundColor: "#32b4b9"
    },
    container: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16
    })
});

const configs = {
    grid: {
        direction: "row",
        justify: "center",
        alignItems: "center"
    },
    item: {
        size: {
            xs: 8,
            sm: 8,
            md: 6,
            lg: 4,
            xl: 4
        }
    },
    paper: {
        square: true,
        elevation: 4
    }
};

const GridNoUser = (props) => {
    const { children, classes } = props;

    return (
        <Grid container
            className={classes.root}
            alignItems={configs.grid.alignItems}
            direction={configs.grid.direction}
            justify={configs.grid.justify} >
            <LogoFull />
            <Grid item 
                xs={configs.item.size.xs}
                sm={configs.item.size.sm}
                md={configs.item.size.md}
                lg={configs.item.size.lg}
                xl={configs.item.size.xl} >
                <Paper
                    className={classes.container}
                    square={configs.paper.square}
                    elevation={configs.paper.elevation} >
                    {children}
                </Paper>
            </Grid>
        </Grid>
    )
};

GridNoUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GridNoUser);
