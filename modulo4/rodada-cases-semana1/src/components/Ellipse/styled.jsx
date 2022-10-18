import styled from "styled-components";
import { BLACK_TEXT_COLOR, ELLIPSE_DRAW_COLOR } from "../../constants/colors";

export const EllipseContainer = styled.div`
    background-color: ${ELLIPSE_DRAW_COLOR};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 10px;
    
    @media (max-width: 1024px) {
        width: 80px;
        height: 80px;
    }
`;

export const EllipseContent = styled.p`
    font-size: 27px;
    font-weight: 700;
    color: ${BLACK_TEXT_COLOR};
    text-align: center;
`;
