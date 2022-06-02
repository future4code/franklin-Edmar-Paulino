import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Remetente = styled.h3`
    font-weight: bold;
    color: blue;
    font-size: 20px;
    `;

const Mensagem = styled.p`
    color: black;
    font-size: 20px;
    margin-left: 5px;
`;

function MensagemEnviada(props) {
    return (
        <Container>
            <Remetente>{props.remetente}:</Remetente>
            <Mensagem>{props.mensagem}</Mensagem>
        </Container>
    );
}

export default MensagemEnviada;
