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

`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
`

export default class PlaylistsContainer extends React.Component {

  
    render (){

        const playList = this.props.playlist.map((playlist) => {
            return (<>
                      <PlayListDiv key={playlist.id}>{playlist.name}</PlayListDiv>
                      <IconButton
                        onClick={()=>this.props.deletePlaylist(playlist.id)}
                        icone={<IoCloseCircle/>}
                      />
                    </>
            )
          })
  
        return (
            
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
                
        )
    }
}