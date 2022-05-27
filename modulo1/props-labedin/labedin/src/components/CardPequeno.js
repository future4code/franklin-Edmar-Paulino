import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const Imagem = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

const Nome = styled.h4`
    margin-right: 4px;
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`


function CardPequeno(props) {
    return (
        <Container>
            <Imagem src={props.imagem} />
            <Conteudo>
                <Nome>{props.nome}:</Nome>
                <p>{props.info}</p>
            </Conteudo>
        </Container>
    )
}

export default CardPequeno;
