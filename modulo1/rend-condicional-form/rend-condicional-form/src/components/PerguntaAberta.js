import React from "react";

function PerguntaAberta(props) {
    const handleInput = (event) => {
        const informacao = event.target.value;
        informacao.length > 0 ? props.funcao(true) : props.funcao(false);
    }

    return (
        <div>
            <p>{props.pergunta}</p>
            <input onChange={handleInput}/>
        </div>
    )
}

export default PerguntaAberta;
