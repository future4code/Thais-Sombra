import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcarPreto from '../../img/bookmark-black.svg'
import iconeMarcarBranco from '../../img/bookmark-white.svg'
import iconeShare from '../../img/send-black.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoShare} from '../SecaoShare/SecaoShare'

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

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado:false,
    share:false
  }

  onClickCurtida = () => {
    if (this.state.curtido){
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
    } else {
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    }
    this.setState({
      curtido:!this.state.curtido,
    })
    }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
      share:false,
    })
  }

  onClickShare = () => {
    this.setState({
      share: !this.state.share,
      comentando: false,
    })
  }

  onClickMarcar = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onChangeComentario = (event) => {
    console.log(event.target.value)
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  
  render() {

    let iconeMarcar

    if(this.state.marcado) {
      iconeMarcar = iconeMarcarPreto
    } else {
      iconeMarcar = iconeMarcarBranco
    }

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteShare

    if(this.state.share) {
      componenteShare = <SecaoShare />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickShare}
          valorContador={this.state.share}
        />

        <IconeComContador
          icone={iconeMarcar}
          onClickIcone={this.onClickMarcar}
        />
      </PostFooter>
      {componenteShare}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post