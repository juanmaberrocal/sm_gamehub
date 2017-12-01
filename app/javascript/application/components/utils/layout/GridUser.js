import React           from "react";
import PropTypes       from "prop-types";
import { withStyles }  from "material-ui/styles";

import Grid            from "material-ui/Grid";
import Paper           from "material-ui/Paper";

const styles = theme => ({
    typeContainer: {
        height: "calc(100% + 16px)",
        backgroundColor: "#32B4B9"
    },
    navBar: {
        height: 64,
        padding: 0
    },
    content: {
        padding: 0,
        height: "calc(100% - 64px)",
        backgroundColor: "#FFF"
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
        alignItems: "flex-start",
        container: true
    },
    item: {
        size: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
            xl: 12
        }
    },
    paper: {
        square: true,
        elevation: 0
    }
};

const GridUser = (props) => {
    const { children, classes } = props;

    return (
        <Grid container
            className={classes.typeContainer}
            container={configs.grid.container}
            alignItems={configs.grid.alignItems}
            direction={configs.grid.direction}
            justify={configs.grid.justify} >
            <Grid item
                className={classes.navBar}
                xs={configs.item.size.xs}
                sm={configs.item.size.sm}
                md={configs.item.size.md}
                lg={configs.item.size.lg}
                xl={configs.item.size.xl} >
            </Grid>
            <Grid item 
                className={classes.content}
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

GridUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GridUser);
