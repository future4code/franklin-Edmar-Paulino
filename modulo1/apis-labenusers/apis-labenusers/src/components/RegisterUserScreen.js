import React, { useState } from "react";
import axios from 'axios'

function RegisterUserScreen() {
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    const handleInputName = (event) => {
        setInputName(event.target.value)
    }

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const RegisterUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = { Authorization: "edmar-paulino-franklin" }
        axios.post(url, { headers })
            .then((response) => {
                console.log(response)
                alert(`Usuário ${inputName} cadastrado com sucesso`)
            }).catch((error) => {
                console.log(error)
                alert(`Erro ao cadastrar usuário`)
            })
        setInputName("")
        setInputEmail("")
    }

    return (
        <div>
            <input 
                value={inputName}
                placeholder="Nome"
                onChange={handleInputName}
            />
            <input
                value={inputEmail}
                placeholder="E-mail"
                onChange={handleInputEmail}
            />
            <button onClick={RegisterUser}>Criar usuário</button>
        </div>
    )
}

export default RegisterUserScreen
