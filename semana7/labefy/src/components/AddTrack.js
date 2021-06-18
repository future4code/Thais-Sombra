import React from "react"
import styled from "styled-components"

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

export default class AddTrack extends React.Component {
    render(){
        return(<>
        <InputsContainer>
            <input
                name="nomeMusica"
                placeholder="Nome da música"
                value={this.props.nomeMusica}
                onChange = {this.props.handleFieldChange}
            ></input>
            <input
                name="nomeArtista"
                placeholder="Nome do artista"
                value={this.props.nomeArtista}
                onChange = {this.props.handleFieldChange}  
            ></input>
            <input
                name="urlMusica"
                placeholder="Link"
                value={this.props.urlMusica}
                onChange = {this.props.handleFieldChange}    
            ></input>
                 
        </InputsContainer>
        </>
        )
    }
}