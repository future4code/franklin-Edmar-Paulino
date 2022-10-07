import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectPage from "../../components/SelectPage/SelectPage";
import { goToQuina } from "../../routes/coordinator";
import { getConcurso, getLoterias, getLoteriasConcursos } from "../../services/loterias";

function MegasenaPage() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [page, setPage] = useState('c');

    const handleInput = (event) => {
        event.preventDefault()
        setInput(event.target.value);
    }

    const onSelectChange = (event) => {
        console.log(event.target.value);
        setPage(event.target.value);
    }
    return (
        <div>
            <h1>Mega-sena</h1>
            <SelectPage />
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
