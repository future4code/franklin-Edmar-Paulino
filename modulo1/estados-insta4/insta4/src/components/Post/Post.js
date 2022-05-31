import React, { useState } from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'

import iconeSalvarBranco from '../../img/turned_in_not_black.svg'
import iconeSalvarPreto from '../../img/turned_in_black.svg'

import iconeCompartilhar from '../../img/share_black.svg'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props) {
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [salvo, setSalvo] = useState(false)
  const [compartilhado, setCompartilhado] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(false);
      setNumeroCurtidas(numeroCurtidas - 1);
      iconeCurtida = iconeCoracaoBranco;
    } else {
      setCurtido(true);
      setNumeroCurtidas(numeroCurtidas + 1);
      iconeCurtida = iconeCoracaoPreto;
    }
  }

  const onClickSalvar = () => {
    if (salvo) {
      setSalvo(false)
      iconeSalvar = iconeSalvarBranco
    } else {
      setSalvo(true)
      iconeSalvar = iconeSalvarPreto
    }
  }

  const onClickCompartilhar = () => {
    setCompartilhado(!compartilhado)
    if (compartilhado) {
      componenteCompartilhar = <SecaoCompartilhar aoEnviar={aoEnviarCompartilhamento}/>
    }
  }

  const aoEnviarCompartilhamento = () => {
    setCompartilhado(false)
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let iconeSalvar

  if (salvo) {
    iconeSalvar = iconeSalvarPreto
  } else {
    iconeSalvar = iconeSalvarBranco
  }

  let componenteCompartilhar

  if (compartilhado) {
    componenteCompartilhar = <SecaoCompartilhar aoEnviar={aoEnviarCompartilhamento}/>
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeSalvar}
          onClickIcone={onClickSalvar}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  )
}

export default Post
