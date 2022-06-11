import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Remetente = styled.input`
    width: 100px;
`;

const Mensagem  = styled.input`
    width: 400px;
`;

const Enviar = styled.button`
    width: 100;
`;

function CaixaDeEnvio(props) {
    return (
        <Container>
            <Remetente/>
            <Mensagem/>
            <Enviar onClick={props.funcao}>
                Enviar
            </Enviar>
        </Container>
    );
}

export default CaixaDeEnvio;
