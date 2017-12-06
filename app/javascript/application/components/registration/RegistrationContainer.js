import React           from 'react';
import { withRouter }  from 'react-router-dom';
import { connect }     from "react-redux";
import {
    validate,
    isValid
} from "../../utils/validator";
import {
    put,
    register
} from "../../api/users/actions";

import Registration    from "./Registration";
import stepsDefinition from "./stepsDefinition";
import validationRules from "./validationRules";

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0,
            registrationData: {
                step1: {
                    name: "",
                    nickname: "",
                    useFullName: false
                },
                step2: {
                    sendSlackInvite: false,
                    slackHandle: ""
                },
                step3: {
                    games: []
                }
            },
            registrationErrors: {
                step1: {},
                step2: {},
                step3: {}
            }
        };

        this.getSteps = this.getSteps.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleStepDataChange = this.handleStepDataChange.bind(this);
        this.handleStepSwitchChange = this.handleStepSwitchChange.bind(this);
        this.handleStepCheckboxChange = this.handleStepCheckboxChange.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    }

    getSteps() {
        return Object.keys(stepsDefinition).map((index, i) => {
            return stepsDefinition[index].name;
        });
    }

    getStepProps(index) {
        return stepsDefinition[index].props;
    }

    getStepContent(index) {
        const stepDataName = `step${index + 1}`;
        switch(index){
            case 3: // confirmation
                return stepsDefinition[index].content(
                    this.state.registrationData
                );
            case 2: // game selection
                return stepsDefinition[index].content(
                    this.props.games,
                    this.state.registrationData[stepDataName],
                    this.state.registrationErrors[stepDataName],
                    this.handleStepDataChange,
                    this.handleStepCheckboxChange
                );
            default:
                return stepsDefinition[index].content(
                    this.state.registrationData[stepDataName],
                    this.state.registrationErrors[stepDataName],
                    this.handleStepDataChange,
                    this.handleStepSwitchChange
                );
        }
    }

    validateStepData() {
        const { activeStep } = this.state;

        if (this.getStepProps(activeStep).optional === true){
            return true;
        }

        const stepDataName = `step${activeStep + 1}`;
        const values = Object.assign({}, this.state.registrationData[stepDataName]);
        const errors = validate(values, validationRules[activeStep]);

        if (!isValid(errors)){
            let registrationErrors = Object.assign({}, this.state.registrationErrors);
            registrationErrors[stepDataName] = errors;
            this.setState({
                registrationErrors: registrationErrors
            });
            return false;
        }

        return true;
    }

    setStepData(field, value) {
        let registrationData = Object.assign({}, this.state.registrationData);
        const { activeStep } = this.state;
        const stepDataName = `step${activeStep + 1}`;
        registrationData[stepDataName][field] = value;

        this.setState({
            registrationData: registrationData
        });
    }

    setStepCheckboxData(field, value, checked) {
        let registrationData = Object.assign({}, this.state.registrationData);
        const { activeStep } = this.state;
        const stepDataName = `step${activeStep + 1}`;
        const valueIndex = registrationData[stepDataName][field].indexOf(value);


        if (checked && valueIndex === -1){
            registrationData[stepDataName][field].push(value);
        } else if (!checked && valueIndex !== -1) {
            registrationData[stepDataName][field].splice(valueIndex, 1);
        }

        this.setState({
            registrationData: registrationData
        });
    }

    handleStepDataChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        this.setStepData(field, value);
    }

    handleStepSwitchChange(e, value) {
        const field = e.target.name;
        this.setStepData(field, value);
    }

    handleStepCheckboxChange(e, checked) {
        const field = e.target.name;
        const value = e.target.id.split("_")[1];
        this.setStepCheckboxData(field, value, checked);
    }

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1
        });
    }

    handleNext() {
        if (!this.validateStepData()){
            return;
        }

        this.setState({
            activeStep: this.state.activeStep + 1
        });
    }

    handleFinish() {
        const self = this;
        const { currentUser } = this.props;
        const { registrationData } = this.state;

        console.log(currentUser)
        console.log(registrationData)

        // console.log(this.props.updateStudent())

        this.props.updateStudent(currentUser.user.id, {})
            // .then(() => {
            //     self.props.register(currentUser.user.id);
            // });
    }

    render() {
        const { currentUser } = this.props;
        const { activeStep } = this.state;

        return (
            <Registration
                activeStep={activeStep}
                getSteps={this.getSteps}
                getStepProps={this.getStepProps}
                getStepContent={this.getStepContent}
                handleBack={this.handleBack}
                handleNext={this.handleNext}
                handleFinish={this.handleFinish} />
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        currentUser: state.currentUser,
        currentUrl: ownProps.location.pathname,
        games: state.games.data,
        state: state
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        updateStudent: (id, data) => (dispatch(put(id, data))),
        register: (id) => (dispatch(register(id)))
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer));
