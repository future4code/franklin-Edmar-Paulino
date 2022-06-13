import React from "react";
import { useState } from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";
import PreenchaCampo from "./PreenchaCampo";

function Etapa3(props){
    const opcoes = [
        "Curso técnico",
        "Cursos de inglês",
        "Não fiz curso complementar"
    ];

    const [campoMotivoNaoTerminarGraduacao, setCampoMotivoNaoTerminarGraduacao] = useState(false);
    const [preenchaMotivoNaoTerminarGraduacao, setPreenchaMotivoNaoTerminarGraduacao] = useState(true);

    const finalizaEtapa = () => {
        if (campoMotivoNaoTerminarGraduacao) {
            props.funcao();
        } else {
            alert("Preencha todas as perguntas da ETAPA 3 antes de prosseguir!");
            setPreenchaMotivoNaoTerminarGraduacao(campoMotivoNaoTerminarGraduacao);
        }
    }

    return (
        <div>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} funcao={setCampoMotivoNaoTerminarGraduacao} />
            {preenchaMotivoNaoTerminarGraduacao ? "" : <PreenchaCampo mensagem={"Preencha o motivo de não ter terminado o ensino superior"} />}
            <PerguntaFechada pergunta={"6. Você fez algum curso complementar?"} opcoes={opcoes} />
            <br />
            <button onClick={finalizaEtapa}>Finalizar</button>
        </div>
    )
}

export default Etapa3;
