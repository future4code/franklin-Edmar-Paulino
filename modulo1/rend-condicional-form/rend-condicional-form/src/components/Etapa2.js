import React, { useState } from "react";
import PerguntaAberta from "./PerguntaAberta";
import PreenchaCampo from "./PreenchaCampo";

function Etapa2(props) {
    const [campoCurso, setCampoCurso] = useState(false);
    const [campoUnidadeDeEnsino, setCampoUnidadeDeEnsino] = useState(false);

    const [preenchaCurso, setPreenchaCurso] = useState(true);
    const [preenchaUnidadeDeEnsino, setPreenchaUnidadeDeEnsino] = useState(true);

    const finalizaEtapa = () => {
        if (campoCurso && campoUnidadeDeEnsino) {
            props.funcao();
        } else {
            alert("Preencha todas as perguntas da ETAPA 2 antes de prosseguir!");
            setPreenchaCurso(campoCurso);
            setPreenchaUnidadeDeEnsino(campoUnidadeDeEnsino);
        }
    }

    return (
        <div>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <PerguntaAberta pergunta={"5. Qual curso?"} funcao={setCampoCurso} />
            {preenchaCurso ? "" : <PreenchaCampo mensagem={"Preencha seu curso"}/>}
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} funcao={setCampoUnidadeDeEnsino} />
            {preenchaUnidadeDeEnsino ? "" : <PreenchaCampo mensagem={"Preencha sua unidade de ensino"}/>}
            <br />
            <button onClick={finalizaEtapa}>Finalizar</button>
        </div>
    )
}

export default Etapa2;
