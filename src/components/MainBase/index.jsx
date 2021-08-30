import React from "react";
import * as St from "./styled";

const MainBase = ({ children }) => {
    return (
        <St.Container>
            {children}
        </St.Container>
    );
};
export default MainBase;
