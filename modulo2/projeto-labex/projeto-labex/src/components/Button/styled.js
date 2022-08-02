import styled from "styled-components"
import { BUTTON, BUTTON_HOVER } from "../../constants/colors"

export const ButtonContainer = styled.button`
    background-color: ${BUTTON};
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
        background-color: ${BUTTON_HOVER};
    }
`
