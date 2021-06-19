import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import AddTrack from "./AddTrack"
import { IoCloseCircle } from "react-icons/io5"
import { FaPlayCircle } from 'react-icons/fa'
import { FaPauseCircle } from 'react-icons/fa'
import axios from "axios"
import RenderMusic from "./PlayerAudio"

const Container = styled.div`
    width: 70%;
    height:100%;
    text-align: left;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(2,0,36);
   background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 59%, rgba(92,66,86,1) 100%)
`

const TrackDiv = styled.div`
    margin: 5px;
    display: flex;
    height:50px;
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color:white;
`

const IMG = styled.img`
    width: 50px;
`

export default class Playlist extends React.Component {
    state ={
        inputAdd: false,
        nomeMusica:'',
        nomeArtista:'',
        urlMusica:'',
        tracks:'',  
    }

    addTrack = () => {
        this.setState({
            inputAdd: !this.state.inputAdd
        })
    }

    addTrackToPlaylist = (e) => {
        console.log('chamou')
        e.preventDefault()
        const body = {
            name:this.state.nomeMusica,
            artist:this.state.nomeArtista,
            url:this.state.urlMusica,      
        }
        axios
            .post(`${this.props.url}/${this.props.playlist.id}/tracks`,body,this.props.headers)
            .then((res)=>{
                this.setState({
                    inputAdd: false,
                    nomeMusica:'',
                    nomeArtista:'',
                    urlMusica:'',   
                })
                this.props.atualizaTracks(this.props.playlist)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    removeTrackFromPlaylist = (tracksId) => {
        axios
        .delete(`${this.props.url}/${this.props.playlist.id}/tracks/${tracksId}`,this.props.headers)
        .then((res)=>{
            this.props.atualizaTracks(this.props.playlist)
          
        })
        .catch((err) => {
            alert(err.response.data.message)
          })
    }
    
    playMusic = (tracks) => {
        this.setState({
            tracks: tracks
        })
    }
    
    handleFieldChange = event => {     
        this.setState({[event.target.name]:event.target.value})  
    }
    
    render(){
        
        const tracks = this.props.playlistTracks.map((tracks) => {
            return (<>
                    <TrackDiv key={tracks.id}>  
                    <IMG src="https://picsum.photos/200/200?random=1"></IMG>
                        <p>{tracks.name}</p>
                        <p>{tracks.artist}</p>
                      <IconButton
                       onClick={()=>this.playMusic(tracks)}
                       icone={<FaPlayCircle />}
                    />
                    <IconButton
                        onClick={()=>this.removeTrackFromPlaylist(tracks.id)}
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
                <h1>{this.props.playlist.name}</h1>
                <button 
                    onClick={this.addTrack}>
                      Adicionar músicas
                </button>
                {renderAddTrack}
                <hr/>
                {tracks}

                <RenderMusic tracks={this.state.tracks} />

            </Container>
                
        )
    }
}

