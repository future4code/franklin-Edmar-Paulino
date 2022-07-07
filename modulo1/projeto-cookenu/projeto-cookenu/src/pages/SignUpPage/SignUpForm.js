import React, { useState } from "react"
import { InputsContainer } from "./styled"
import { Button, TextField, CircularProgress } from "@mui/material"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user"
import { useNavigate } from "react-router-dom"

function SignUpForm({ setRightButtonText }) {
    const [form, handleInputChange, clear] = useForm({ name: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={handleInputChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"name"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={handleInputChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={handleInputChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    margin={"normal"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Efetuar Cadastro</>}
                </Button>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm
