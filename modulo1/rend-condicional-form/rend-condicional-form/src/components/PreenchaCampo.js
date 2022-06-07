import React from "react";
import styled from "styled-components"

const Alerta = styled.p`
    color: red;
`

function PreenchaCampo(props) {
    return (
        <Alerta>{props.mensagem}</Alerta>
    )
}

export default PreenchaCampo;
