import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToQuina } from "../../routes/coordinator";
import { getConcurso, getLoterias, getLoteriasConcursos } from "../../services/loterias";

function MegasenaPage() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleInput = (event) => {
        event.preventDefault()
        setInput(event.target.value);
    }
    return (
        <div>
            <h1>Mega-sena</h1>
            <button onClick={() => goToQuina(navigate)}>Ir para Quina</button>
            <button onClick={() => getLoterias()}>Imprimir loterias no console</button>
            <button onClick={() => getLoteriasConcursos()}>Imprmir concursos</button>
            <br />
            <input onChange={handleInput} />
            <button onClick={() => getConcurso(input)}>Imprimir concurso</button>
        </div>
    );
}

export default MegasenaPage;
