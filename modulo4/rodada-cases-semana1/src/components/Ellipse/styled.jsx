import styled from "styled-components";
import { BLACK_TEXT_COLOR, ELLIPSE_DRAW_COLOR } from "../../constants/colors";

export const EllipseContainer = styled.div`
    /* background-color: ${ELLIPSE_DRAW_COLOR}; */
    background-color: purple;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 105px;
    width: 110px;
    border-radius: 50%;
    margin: 25px;
`;

export const EllipseContent = styled.p`
    font-size: 27px;
    font-weight: 700;
    color: ${BLACK_TEXT_COLOR};
    text-align: center;
`;
