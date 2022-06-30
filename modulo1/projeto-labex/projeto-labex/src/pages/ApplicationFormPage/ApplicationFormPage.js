import React from "react"

function ApplicationFormPage() {
    return (
        <div>
            <form>
                <select>
                    <option value="" disabled selected>Escolha uma viagem</option>
                    <option>Pegando um bronze em Mercúrio</option>
                </select>
                <input placeholder="Nome" />
                <input placeholder="Idade" />
                <input placeholder="Texto de Candidatura" />
                <input placeholder="Profissão" />
                <select>
                    <option value="" disabled selected>Escolha um país</option>
                    <option>Brasil</option>
                </select>
            </form>
        </div>
    )
}

export default ApplicationFormPage
