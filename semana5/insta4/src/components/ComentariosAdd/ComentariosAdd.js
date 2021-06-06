import React, {Component} from 'react'
import styled from 'styled-components'

const arrayComentarios = [
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      comentario: ""
    },
    {
      nomeUsuario: "João",
      fotoUsuario: "https://picsum.photos/50/51",
      comentario: ""
    },
    {
      nomeUsuario: "Amanda",
      fotoUsuario: "https://picsum.photos/50/52",
      comentario: ""
    }
  ];


export class ComentariosAdd extends Component {

    state = {
        comentarios: arrayComentarios,
        userName: "",
        userPhoto: "",
        userComment: ""
      };

    addNewComentario = () => {
        const newComentario = {
          nomeUsuario: this.state.userName,
          fotoUsuario: this.state.userPhoto,
          comentarioUsuario: this.state.userComentario
        };

        this.setState({
            comentarios: [...this.state.comentarios, newComentario],
            userName: "",
            userPhoto: "",
            postComment: ""
          });
        };
}