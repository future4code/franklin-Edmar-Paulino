import React from "react"

function LoginPage() {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder={"E-mail"} type={"email"} />
                <input placeholder={"Senha"} type={"password"}/>
                <button>Entrar</button>
                <button>Voltar</button>
            </form>
        </div>
    )
}

export default LoginPage
