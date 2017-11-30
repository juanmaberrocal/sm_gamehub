import React       from 'react';
import TextField   from "material-ui/TextField";

class StepOneContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <TextField
                required
                id="name"
                label="Name"
                margin="normal"
                fullWidth={false}
                value={this.props.formData.name}
                onChange={this.props.onChange} />
        )
    }
}

export default StepOneContainer;
