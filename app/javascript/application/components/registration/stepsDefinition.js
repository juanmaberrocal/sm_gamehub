import React        from 'react';
import StepOne      from "./steps/StepOne";
import StepTwo      from "./steps/StepTwo";
import StepThreeContainer from "./steps/StepThreeContainer";

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
        content: (data, errors, onChange, onCheck) => {
            return (<StepThreeContainer
                    formData={data}
                    formErrors={errors}
                    onChange={onChange}
                    onCheck={onCheck} />)
        },
        props: {
            optional: true
        }
    },
    3: {
        name: 'Confirmation',
        content: (data, errors, onChange, onCheck) => {
            return (<StepThreeContainer
                    formData={data}
                    formErrors={errors}
                    onChange={onChange}
                    onCheck={onCheck} />)
        },
        props: {
            optional: false
        }
    }
}

export default stepsDefinition;
