import React           from "react";
import FlashContainer  from "../flash/FlashContainer";
import NavBarContainer from "../navBar/NavBarContainer";

const Wrapper = (props) => {
    return (
        <div>
            <FlashContainer />
            <NavBarContainer />
            {props.children}
        </div>
    );
};

export default Wrapper;
