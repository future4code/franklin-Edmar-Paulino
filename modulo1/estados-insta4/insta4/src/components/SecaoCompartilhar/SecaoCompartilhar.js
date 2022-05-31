import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const CompartilharContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputCompartilhar = styled.input`
    width: 95%;
    margin: auto;
`

const BotoesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
`

export function SecaoCompartilhar(props) {
    const [mensagem, setMensagem] = useState('');

	const armazenaMensagem = (event) => {
		setMensagem(event.target.value)
	}

    const imprimirMensagemCompartilhadaInstagram = () => {
        console.log(`Post compartilhado no Instagram com a mensagem: ${mensagem}`)
        props.aoEnviar()
    }

    const imprimirMensagemCompartilhadaFacebook = () => {
        console.log(`Post compartilhado no Facebook com a mensagem: ${mensagem}`)
        props.aoEnviar()
    }

    const imprimirMensagemCompartilhadaTwitter = () => {
        console.log(`Post compartilhado no Twitter com a mensagem: ${mensagem}`)
        props.aoEnviar()
    }

	return (
		<CompartilharContainer>
			<InputCompartilhar
				placeholder={'Mensagem'}
				value={mensagem}
				onChange={armazenaMensagem}
			/>
            <BotoesContainer>
                <button onClick={imprimirMensagemCompartilhadaInstagram}>Instagram</button>
                <button onClick={imprimirMensagemCompartilhadaFacebook}>Facebook</button>
                <button onClick={imprimirMensagemCompartilhadaTwitter}>Twitter</button>
            </BotoesContainer>
		</CompartilharContainer>
	)
}

