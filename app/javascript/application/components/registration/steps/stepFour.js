import React                 from "react";
import PropTypes             from "prop-types";
import { withStyles }        from "material-ui/styles";
import { getGameNames }      from "../../../utils/games";

import Divider               from "material-ui/Divider";
import { FormControl }       from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Typography            from 'material-ui/Typography';
import InputReview           from "../../utils/InputReview";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    fullWidth: {
        width: "100%",
        marginBottom: theme.spacing.unit * 2
    },
    denseCaption: {
        width: "100%",
        marginTop: theme.spacing.unit * -2
    }
});

const configs = {
    bodyTypography: "body1",
    captionTypography: "caption"
};

class stepFour extends React.Component {
    render() {
        const { classes } = this.props;
        const { formData } = this.props;
        const selectedGames = getGameNames(formData.step3.games).sort();

        return (
            <div className={classes.container}>
                <Typography
                    type={configs.bodyTypography}
                    className={classes.fullWidth}>
                    Almost done! The final step is to review your information below.
                </Typography>
                <div
                    className={classes.fullWidth}>
                    <InputReview
                        label="Full Name"
                        field="name"
                        value={formData.step1.name} />
                    <InputReview
                        label="Nickname"
                        field="nickname"
                        value={formData.step1.nickname} />
                    <InputReview
                        label="Use Full Name"
                        field="useFullName"
                        value={formData.step1.useFullName} />
                </div>
                <Divider light
                    className={classes.fullWidth} />
                <div
                    className={classes.fullWidth}>
                    <InputReview
                        label="Receive Slack Invitation"
                        field="sendSlackInvite"
                        value={formData.step2.sendSlackInvite} />
                    <InputReview
                        label="Slack Handle"
                        field="slackHandle"
                        value={formData.step2.slackHandle} />
                </div>
                <Divider light
                    className={classes.fullWidth} />
                <div
                    className={classes.fullWidth}>
                    <InputReview
                        label="Games Selected"
                        field="games"
                        value={selectedGames}
                        fullWidth={true}
                        multiline={true} />
                </div>
                <Typography
                    type={configs.bodyTypography}
                    className={classes.fullWidth}>
                    If everything looks correct, hit Finish to complete your registration.<br/>
                </Typography>
                <Typography
                    type={configs.captionTypography}
                    className={classes.denseCaption}>
                    You can always go back into your profile after registering to update any information.
                </Typography>
            </div>
        )
    }
}

stepFour.propTypes = {
  classes: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired
};

export default withStyles(styles)(stepFour);
