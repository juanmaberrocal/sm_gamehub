import React          from "react";
import PropTypes      from "prop-types";
import { withStyles } from "material-ui/styles";

import Stepper, {
    Step, StepLabel, StepContent
} from 'material-ui/Stepper';
import Button         from 'material-ui/Button';
import Typography     from 'material-ui/Typography';

const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit
    },
    actionsContainer: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit
    },
    resetContainer: {
        marginTop: 0,
        padding: theme.spacing.unit * 3 // TODO: See TODO note on Stepper
    }
});

const configs = {
    stepper: {
        orientation: "vertical"
    },
    header: {
        title: {
            type: "title"
        },
        subtitle: {
            type: "subheading"
        }
    }
};

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, activeStep } = this.props;
        const steps = this.props.getSteps();

        return (
            <div>
                <Typography
                    type={configs.header.title.type}>
                    Welcome to the Hub!
                </Typography>
                <Typography
                    type={configs.header.subtitle.type}>
                    Please complete your registration so you can join the fun.
                </Typography>
                <Stepper
                    activeStep={activeStep}
                    orientation={configs.stepper.orientation}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}
                                {...this.props.getStepProps(index)}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    {this.props.getStepContent(index)}
                                    <div
                                        className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.props.handleBack}
                                                className={classes.button}>
                                                Back
                                            </Button>
                                            <Button
                                                raised
                                                color="primary"
                                                onClick={this.props.handleNext}
                                                className={classes.button}>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        )
                    })}
                </Stepper>
            </div>
        )
    }
}

Registration.propTypes = {
    classes: PropTypes.object.isRequired,
    activeStep: PropTypes.number.isRequired,
    getSteps: PropTypes.func.isRequired,
    getStepProps: PropTypes.func.isRequired,
    getStepContent: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired
};

export default withStyles(styles)(Registration);
