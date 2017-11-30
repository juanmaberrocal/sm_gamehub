import React              from 'react';
import { withRouter }     from 'react-router-dom';
import { connect }        from "react-redux";

import Registration       from "./Registration";
import StepOneContainer   from "./steps/StepOneContainer";
import StepTwoContainer   from "./steps/StepTwoContainer";
import StepThreeContainer from "./steps/StepThreeContainer";

const registrationSteps = [
    'Complete Your Profile',
    'Integrate with Slack',
    'Select Games',
    'Confirmation'
];

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            registrationData: {
                step1: {},
                step2: {},
                step3: {}
            }
        };

        this.getSteps = this.getSteps.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleStepDataChange = this.handleStepDataChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    getSteps() {
        return registrationSteps;
    }

    getStepContent(index) {
        const { registrationData } = this.state;

        switch(index) {
            case 0:
                return (<StepOneContainer
                    formData={registrationData.step1}
                    onChange={this.handleStepDataChange} />);
            case 1:
                return (<StepTwoContainer
                    formData={registrationData.step2}
                    onChange={this.handleStepDataChange} />);
            case 2:
                return (<StepThreeContainer
                    formData={registrationData.step3}
                    onChange={this.handleStepDataChange} />);
            case 3:
                // TODO
        }
    }

    handleStepDataChange(e) {
        const field = e.target.id;
        const value = e.target.value;

        const stepDataName = "step" + (this.state.activeStep + 1)
        let registrationData = Object.assign({}, this.state.registrationData);
        registrationData[stepDataName][field] = value;

        this.setState({
            registrationData: registrationData
        });
    }

    handleNext() {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }

    render() {
        const { currentUser } = this.props;
        const { activeStep } = this.state;

        return (
            <Registration
                activeStep={activeStep}
                getSteps={this.getSteps}
                getStepContent={this.getStepContent}
                handleNext={this.handleNext}
                handleBack={this.handleBack} />
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser,
        currentUrl: ownProps.location.pathname
    }
);

const mapDispatchToProps = (dispatch) => (
    {
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer));
