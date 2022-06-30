import React from "react"
import { ButtonContainer } from "./styled"

function Button(props) {
    const { onClick, textContent, color } = props
    return (
        <ButtonContainer onClick={onClick} color={color}>{textContent}</ButtonContainer>
    )
}

export default Button
