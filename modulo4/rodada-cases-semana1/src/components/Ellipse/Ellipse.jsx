import React from "react";
import { EllipseContainer, EllipseContent } from "./styled";

function Ellipse({ text }) {
    return (
        <EllipseContainer>
            <EllipseContent>{text}</EllipseContent>
        </EllipseContainer>
    );
}

export default Ellipse;
