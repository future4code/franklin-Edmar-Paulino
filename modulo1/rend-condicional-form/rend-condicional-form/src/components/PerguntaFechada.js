import React from "react";

function PerguntaFechada(props) {
    const opcoes = props.opcoes.map((opcao) => {
        return (
            <option>{opcao}</option>
        )
    });

    return (
        <div>
            <p>{props.pergunta}</p>
            <select onChange={props.funcao}>
                {opcoes}
            </select>
        </div>
    )
}

export default PerguntaFechada;
