import React from "react"
import { LogoImage, ScreenContainer } from "./styled"
import logo from "../../assets/logo.png"
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

function SignUpPage({ setRightButtonText }) {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}

export default SignUpPage
