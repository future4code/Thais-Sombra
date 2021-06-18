import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import AddTrack from "./AddTrack"
import { IoCloseCircle } from "react-icons/io5"
import { FaPlayCircle } from 'react-icons/fa'
import { FaPauseCircle } from 'react-icons/fa'
import axios from "axios"

const Container = styled.div`
    width: 70%;
    height:800px;
    background-color:lightgrey;
    text-align: left;
`

const TrackDiv = styled.div`
    background-color: lightgrey;
    margin: 5px;
    display: flex;
    width: 90%auto;
    flex-direction: row;
    justify-content: space-around;

`

export default class Playlist extends React.Component {
    state ={
        inputAdd: false,
        nomeMusica:'',
        nomeArtista:'',
        urlMusica:'',    
    }

    addTrack = () => {
        this.setState({
            inputAdd: !this.state.inputAdd
        })
    }

    addTrackToPlaylist = () => {
        const body = {
            name:this.state.playlistName,
            artist:this.state.nomeArtista,
            url:this.state.urlMusica,      
        }
        axios
        .post((`${this.props.url}${this.props.playlistId}`,body,this.props.headers))
        .then((res)=>{
            this.setState({
                inputAdd: false,
                nomeMusica:'',
                nomeArtista:'',
                urlMusica:'',   
            })
        })
        .catch((err) => {
            alert(err.response.data.message)
          })
    }

    handleFieldChange = event => {     
        this.setState({[event.target.name]:event.target.value})  
    }

    render(){

        const tracks = this.props.playlistTracks.map((tracks) => {
            return (<>
                      <TrackDiv key={tracks.id}>  
                        <p>{tracks.name}</p>
                        <p>{tracks.artist}</p>
                      <IconButton
                       onClick={()=>this.props.deletePlaylist(tracks.id)}
                       icone={<FaPlayCircle />}
                     />
                     <IconButton
                       onClick={()=>this.props.deletePlaylist(tracks.id)}
                       icone={<FaPauseCircle />}
                     />
                      <IconButton
                        onClick={()=>this.props.deletePlaylist(tracks.id)}
                        icone={<IoCloseCircle/>}
                      />
                      </TrackDiv>
                      <hr/>
                    </>
            )
          })

        let renderAddTrack

        if (this.state.inputAdd){
            renderAddTrack = <>
                    <AddTrack
                        handleFieldChange = {this.handleFieldChange}
                        onClick={()=>this.addTrackToPlaylist()}
                        nomeMusica={this.state.nomeMusica}
                        nomeArtista={this.state.nomeArtista}
                        urlMusica={this.state.urlMusica}
                    />
                    <button 
                        onClick={this.addTrackToPlaylist}>
                        Salvar
                    </button>      
                </>
        }

        return (
            
            <Container>
                <h1>{this.props.playlistChosen}</h1>
                <button 
                    onClick={this.addTrack}>
                      Adicionar músicas
                </button>
                {renderAddTrack}
                {tracks}
            </Container>
                
        )
    }
}

