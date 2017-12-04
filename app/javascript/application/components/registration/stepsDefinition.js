import React     from 'react';
import StepOne   from "./steps/StepOne";
import StepTwo   from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const stepsDefinition = {
    0: {
        name: 'Complete Your Profile',
        content: (data, errors, onChange, onCheck) => {
            return (<StepOne
                    formData={data}
                    formErrors={errors}
                    onChange={onChange}
                    onCheck={onCheck} />)
        },
        props: {
            optional: false
        }
    },
    1: {
        name: 'Integrate with Slack',
        content: (data, errors, onChange, onCheck) => {
            return (<StepTwo
                    formData={data}
                    formErrors={errors}
                    onChange={onChange}
                    onCheck={onCheck} />)
        },
        props: {
            optional: true
        }
    },
    2: {
        name: 'Select Games',
        content: (games, data, errors, onChange, onCheck) => {
            return (<StepThree
                    formData={data}
                    formErrors={errors}
                    onChange={onChange}
                    onCheck={onCheck}
                    games={games} />)
        },
        props: {
            optional: true
        }
    },
    3: {
        name: 'Confirmation',
        content: (data, errors, onChange, onCheck) => {
            return (<StepFour
                    formData={data} />)
        },
        props: {
            optional: false
        }
    }
}

export default stepsDefinition;
