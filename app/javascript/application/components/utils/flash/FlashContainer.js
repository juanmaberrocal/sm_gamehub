import React          from "react";
import { connect }    from "react-redux";
import { hide_flash } from "./actions";

import Flash          from "./Flash";

class FlashContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleRequestClose(e, reason) {
        if (reason === "clickaway") {
          return;
        }

        this.props.hide();
    }

    render() {
        return (
            <Flash
                isOpen={this.props.isOpen}
                message={this.props.message}
                type={this.props.type}
                handleClose={this.handleRequestClose} />
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        message: state.flash.message,
        isOpen: state.flash.isOpen,
        type: state.flash.type
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        hide: () => (dispatch(hide_flash()))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(FlashContainer)
