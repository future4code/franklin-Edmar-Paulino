import React from "react"
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import { Button } from "@mui/material"
import LoginForm from "./LoginForm"
import { goToSignUp } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

function LoginPage({ setRightButtonText }) {
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRightButtonText={setRightButtonText} />
            <SignUpButtonContainer>
                <Button
                    type={"submit"}
                    variant={"text"}
                    color={"primary"}
                    fullWidth
                    margin={"normal"}
                    onClick={() => goToSignUp(navigate)}
                >
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage
