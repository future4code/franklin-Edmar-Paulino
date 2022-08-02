import React from "react"

function CreateTripPage() {
    return (
        <div>
            <input placeholder={""} />
            <select>
                <option value="" disabled selected>Escolha um planeta</option>
                <option>Terra</option>
            </select>
            <input placeholder={""} />
            <input placeholder={""} />
            <input placeholder={""} />
            <button>Enviar</button>
            <button>Voltar</button>
        </div>
    )
}

export default CreateTripPage
