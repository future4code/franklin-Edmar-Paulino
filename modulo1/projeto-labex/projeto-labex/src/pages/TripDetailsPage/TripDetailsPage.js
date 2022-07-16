import React from "react"

function TripDetailsPage() {
    return (
        <div>
            <h1>Pegando um bronze em Mercúrio</h1>
            <div>
                <p>Nome: Pegando um bronze em Mercúrio</p>
                <p>Descrição: Que tal aproveitar o solzinho de Mercúrio</p>
                <p>Planeta: Mercúrio</p>
                <p>Duração: 10 dias</p>
                <p>18-10-2022</p>
            </div>
            <div>
                <h1>Candidatos pendentes</h1>
                <div>
                    <p>Nome: José Dos Testes</p>
                    <p>Profissão: Especialista em Testagem</p>
                    <p>Idade: 123</p>
                    <p>País: Japão</p>
                    <p>Texto de Candidatura: Gostaria humildimente de testar sua nave</p>
                    <button>Aprovar</button>
                    <button>Reprovar</button>
                </div>
                <div>
                    <p>Nome: Josefa Dos Testes</p>
                    <p>Profissão: Especialista em Testagem</p>
                    <p>Idade: 29</p>
                    <p>País: Alemanha</p>
                    <p>Texto de Candidatura: Gostaria humildimente de testar sua viagem</p>
                    <button>Aprovar</button>
                    <button>Reprovar</button>
                </div>
            </div>
            <div>
                <h1>Candidatos Aprovados</h1>
                <div>
                    <li>João dos Testes</li>
                    <li>Maria dos Testes</li>
                    <li>Joana dos Testes</li>
                    <li>Mario dos Testes</li>
                </div>
            </div>
        </div>
    )
}

export default TripDetailsPage
