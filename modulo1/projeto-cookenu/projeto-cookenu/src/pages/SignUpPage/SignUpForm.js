import React from "react"
import { InputsContainer } from "./styled"
import { Button, TextField } from "@mui/material"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user"
import { useNavigate } from "react-router-dom"

function SignUpForm({ setRightButtonText }) {
    const [form, handleInputChange, clear] = useForm({ name: "", email: "", password: "" })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
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
                    Efetuar cadastro
                </Button>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm
