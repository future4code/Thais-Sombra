import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import AddTrack from "./AddTrack"
import { IoCloseCircle } from "react-icons/io5"
import { FaPlayCircle } from 'react-icons/fa'
import { BsFillPlusSquareFill } from 'react-icons/bs';
import axios from "axios"
import RenderMusic from "./PlayerAudio"
import ButtonContainer from './ButtonContainer'
import Button from './Button'

const Container = styled.div`
    width: 80%;
    height:100%;
    text-align: left;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(2,0,36);
    color:white;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 59%, rgba(92,66,86,1) 100%);
    h1{
        font-size: 80px;
    }
    @media (max-width: 1200px){
    width: 60%
    }
    @media (max-width: 415px){
    width: 100%
    }
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

const HeaderContainer = styled.div`
    height: 250px;
`

const AddContainer = styled.div`
    display: flex;
    flex-direction: row;
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
        if (window.confirm("Tem certeza que deseja excluir esta música?")){
            axios
            .delete(`${this.props.url}/${this.props.playlist.id}/tracks/${tracksId}`,this.props.headers)
            .then((res)=>{
                this.props.atualizaTracks(this.props.playlist)
              
            })
            .catch((err) => {
                alert(err.response.data.message)
              })
        }
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
            return (
                    <TrackDiv key={tracks.id}>  
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
            )
          })

        let renderAddTrack

        if (this.state.inputAdd){
            renderAddTrack = <AddContainer>

                    <AddTrack
                        handleFieldChange = {this.handleFieldChange}
                        onClick={()=>this.addTrackToPlaylist()}
                        nomeMusica={this.state.nomeMusica}
                        nomeArtista={this.state.nomeArtista}
                        urlMusica={this.state.urlMusica}
                        />
                    <Button
                      onClick={this.addTrackToPlaylist} 
                      texto='Salvar'
                      />
                      </AddContainer>

        }

        return (
            
            <Container>
                <HeaderContainer>
                    <h3>playlist</h3>
                    <h1>{this.props.playlist.name}</h1>
                    <ButtonContainer 
                        onClick={this.addTrack}
                        icone={<BsFillPlusSquareFill />}
                        texto="Adicionar música"
                    />
                    {renderAddTrack}
                </HeaderContainer>
                <hr/>
                {tracks}

                <RenderMusic tracks={this.state.tracks} />

            </Container>
                
        )
    }
}

