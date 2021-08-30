import React from "react";
import * as St from "./styled";
import Header from "../header";

const MainBase = ({ children }) => {
    return (
        <St.Container>
            <Header />
            {children}
        </St.Container>
    );
};
export default MainBase;
