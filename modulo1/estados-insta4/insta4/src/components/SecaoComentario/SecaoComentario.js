import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	const [comentario, setComentario] = useState('');
	const imprimirComentario = (event) => {
		setComentario(event.target.value)
		console.log(comentario)
	}
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={comentario}
				onChange={imprimirComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}