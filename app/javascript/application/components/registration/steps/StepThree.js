import React          from "react";
import PropTypes      from "prop-types";
import { connect }    from "react-redux";
import { withStyles } from "material-ui/styles";

import {
    FormGroup,
    FormControlLabel
} from "material-ui/Form";
import Checkbox       from "material-ui/Checkbox";
import Typography     from "material-ui/Typography";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 0,
        marginBottom: theme.spacing.unit * 2,
        width: 400,
      },
      fullWidth: {
        width: "100%",
        marginBottom: theme.spacing.unit * 2
      },
      denseHelper: {
        margin: 0
      }
});

const configs = {
    bodyTypography: "body1"
};

class stepThree extends React.Component {
    render() {
        const { classes } = this.props;
        const { formData, formErrors} = this.props;
        const { games } = this.props;

        return (
            <div className={classes.container}>
                <Typography
                    type={configs.bodyTypography}
                    className={classes.fullWidth}>
                    Select from the list of games available in the GameHub.<br/>
                    The games that you select will allow you keep track of the rounds you play and your results.
                    It will also let you see how the rest of the players in the Hub are doing, and what activity each game is having.
                </Typography>
                <div className={classes.fullWidth}>
                    <FormGroup row>
                        {games.map((game, index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            inputProps={{id: `games_${game.id}`, name: `games`}}
                                            checked={formData.games.indexOf(`${game.id}`) !== -1}
                                            onChange={this.props.onCheck} />
                                    }
                                    label={game.name} />
                            )
                        })}
                    </FormGroup>
                </div>
            </div>
        )
    }
}

stepThree.propTypes = {
  classes: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired
};

export default withStyles(styles)(stepThree);
