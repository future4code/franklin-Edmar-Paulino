import React from "react"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import { StyledToolBar } from "./styled"
import { goToRecipesList, goToLogin } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

function Header({rightButtonText, setRightButtonText}) {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolBar>
                <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header
