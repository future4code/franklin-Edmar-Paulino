import React from "react"
import { ButtonContainer } from "./styled"

function ButtonCancel(props) {
    const { onClick, textContent } = props
    return (
        <ButtonContainer onClick={onClick}>{textContent}</ButtonContainer>
    )
}

export default ButtonCancel
