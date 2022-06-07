import React, { useState } from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";
import PreenchaCampo from "./PreenchaCampo";

function Etapa1(props) {
    const opcoes = [
        "Ensino Médio Incompleto",
        "Ensino Médio Completo",
        "Ensino Superior Incompleto",
        "Ensino Superior Completo"
    ];

    const [campoNome, setCampoNome] = useState(false);
    const [campoIdade, setCampoIdade] = useState(false);
    const [campoEmail, setCampoEmail] = useState(false);
    const [novaEtapa, setNovaEtapa] = useState(3);

    const [preencheNome, setPreencheNome] = useState(true);
    const [preencheIdade, setPreencheIdade] = useState(true);
    const [preencheEmail, setPreencheEmail] = useState(true);

    const mudaParaNovaEtapa = () => {
        if (campoNome && campoIdade && campoEmail) {
            props.funcao(novaEtapa);
        } else {
            alert("Preencha todas as perguntas da ETAPA 1 antes de prosseguir!");
            setPreencheNome(campoNome);
            setPreencheIdade(campoIdade);
            setPreencheEmail(campoEmail);
        }
    };

    const handleSelecao = (event) => {
        const selecionado = event.target.value;
        selecionado.indexOf("Superior") > -1 ? setNovaEtapa(2) : setNovaEtapa(3);
    };

    return (
        <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <PerguntaAberta pergunta={"1. Qual o seu nome?"} funcao={setCampoNome} />
            {preencheNome ? "" : <PreenchaCampo mensagem={"Preencha seu nome"}/>}
            <PerguntaAberta pergunta={"2. Qual sua idade?"} funcao={setCampoIdade} />
            {preencheIdade ? "" : <PreenchaCampo mensagem={"Preencha sua idade"}/>}
            <PerguntaAberta pergunta={"3. Qual seu email?"} funcao={setCampoEmail} />
            {preencheEmail ? "" : <PreenchaCampo mensagem={"Preencha seu email"}/>}
            <PerguntaFechada pergunta={"4. Qual a sua escolaridade?"} opcoes={opcoes} funcao={handleSelecao} />
            <br />
            <button onClick={mudaParaNovaEtapa}>Continuar</button>
        </div>
    )
}

export default Etapa1;
