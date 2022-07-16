import styled from "styled-components"
import { BUTTON_CANCEL, BUTTON_CANCEL_HOVER } from "../../constants/colors"

export const ButtonContainer = styled.button`
    background-color: ${BUTTON_CANCEL};
    color: white;
    width: 180px;
    height: 50px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: 700;
    transition: 500ms;
    &:hover {
        transform: scale(1.2);
        background-color: ${BUTTON_CANCEL_HOVER};
    }
`
