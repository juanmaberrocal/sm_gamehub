import React              from "react";
import PropTypes          from "prop-types";
import { withStyles }     from "material-ui/styles";

import AppBar             from "material-ui/AppBar";
import Toolbar            from "material-ui/Toolbar";
import Typography         from "material-ui/Typography";
import IconButton         from "material-ui/IconButton";
import MenuIcon           from "material-ui-icons/Menu";
import AccountCircle      from "material-ui-icons/AccountCircle";
import Switch             from "material-ui/Switch";
import {
    FormControlLabel,
    FormGroup
} from "material-ui/Form";
import Menu, { MenuItem } from "material-ui/Menu";

const styles = theme => ({
  root: {
    height: 64
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
});

const configs = {
    appBar: {
        position: "fixed",
        color: "primary"
    },
    title: {
        color: "inherit"
    },
    menu: {
        nav: {
            icon: {
                color: "contrast"
            }
        },
        profile: {
            icon: {
                color: "contrast"
            },
            anchor: {
                vertical: "top",
                horizontal: "left",
            },
            transition: {
                vertical: "top",
                horizontal: "left",
            }
        }
    }
};

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navAnchor: null,
            profileAnchor: null
        };

        this.handleProfileOpen = this.handleProfileOpen.bind(this);
        this.handleProfileClose = this.handleProfileClose.bind(this);
    }

    handleProfileOpen(ev) {
        this.setState({
            profileAnchor: ev.target
        });
    }

    handleProfileClose() {
        this.setState({
            profileAnchor: null
        });
    }

    render() {
        const { classes, isRegistered } = this.props;
        const { navAnchor, profileAnchor } = this.state;

        const navOpen = Boolean(navAnchor);
        const profileOpen = Boolean(profileAnchor);

        return (
            <AppBar
                className={classes.root}
                position={configs.appBar.position}
                color={configs.appBar.color} >
                <Toolbar>
                    {isRegistered && (
                        <IconButton
                            className={classes.menuButton}
                            color={configs.menu.nav.icon.color}
                            aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography
                        type="title"
                        color={configs.title.color}
                        className={classes.flex}>
                        SM GameHub
                    </Typography>
                    <div>
                        <IconButton
                            color={configs.menu.profile.icon.color}
                            onClick={this.handleProfileOpen}
                            aria-owns={profileOpen ? "menu-profile" : null}
                            aria-haspopup="true" >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-profile"
                            anchorEl={profileAnchor}
                            anchorOrigin={configs.menu.profile.anchor}
                            transformOrigin={configs.menu.profile.transition}
                            open={profileOpen}
                            onRequestClose={this.handleProfileClose}>
                            {isRegistered && (
                                <MenuItem onClick={this.handleProfileClose}>Profile</MenuItem>
                            )}
                            <MenuItem onClick={this.props.handleLogOut}>Log Out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    isRegistered: PropTypes.bool,
    handleLogOut: PropTypes.func.isRequired
};

export default withStyles(styles)(NavBar);
