import React from "react"
import styled from "styled-components"
import axios from 'axios'
import { IoIosArrowForward } from 'react-icons/io'
import { IoCloseCircle } from 'react-icons/io5';
import IconButton from './IconButton';
import Playlist from "./Playlist";

const Container = styled.div`
width: 30%;
height:800px;
background-color:lightsalmon;
`
const PlayListDiv = styled.div`
    background-color: lightgrey;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export default class PlaylistsContainer extends React.Component {

  state={
    playlistTracks:[],
    playlistChosen: '', 
  }

  getPlaylistTracks = (playlist) => {
    axios
      .get(`${this.props.url}/${playlist.id}/tracks`, this.props.headers)
      .then((res) => {
        this.setState({ 
          playlistTracks: res.data.result.tracks, 
          playlistChosen: playlist.name,
        })
        console.log(this.state.playlistTracks)
      })
      .catch((err) => {
        console.log('deu ruim')
        alert(err.response.data.message)
      })
  }

    render (){

        const playList = this.props.playlist.map((playlist) => {
            return (<>
                      <PlayListDiv key={playlist.id}
                        onClick={()=>this.getPlaylistTracks(playlist)}
                      >{playlist.name}
                      <IconButton
                        onClick={()=>this.props.deletePlaylist(playlist.id)}
                        icone={<IoCloseCircle/>}
                      />
                      </PlayListDiv>
                    </>
            )
          })
  
        return (
            <>
              <Container>
                  <h2>Playlists salvas</h2>
                  <input
                    name="playlistName"
                    value={this.props.playlistName}
                    onChange = {this.props.handleFieldChange}
                  >
                  </input>
                  <button 
                    onClick={()=>this.props.createPlaylist()}>
                      Criar Playlist
                  </button>
                  {playList}

              </Container>
              <Playlist 
                playlistTracks={this.state.playlistTracks}
                playlistChosen={this.state.playlistChosen}
              />
            </>       
        )
    }
}