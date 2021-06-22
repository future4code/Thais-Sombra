import React from "react"
import styled from "styled-components"
import axios from 'axios'
import { IoCloseCircle } from 'react-icons/io5';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import IconButton from './IconButton';
import Playlist from "./Playlist";
import ButtonContainer from './ButtonContainer';
import Button from './Button'

const Container = styled.div`
  width: 20%;
  height:100%;
  background-color:rgba(0,0,0);
  color: rgba(255,255,255);
  @media (max-width: 1200px){
    width: 40%
  }
  @media (max-width: 415px){
    width: 100%
  }
`
const PlayListDiv = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 50px 20px 50px;
  color: rgba(255,255,255,0.6);
  cursor:pointer;
  &:hover{
    color: rgba(255,255,255,1);
  };
`

const CriarPlaylist = styled.div`
  margin: 20px 20px 20px 0;
  align-items: center;
  text-align: center;
  input{
    height: 30px;
    width: 200px;
    font-size: 16px;
    margin-right: 5px;
    margin-left: 5px;
  }
`

export default class PlaylistsContainer extends React.Component {

  state={
    playlistTracks:[],
    playlist:'',
    addPlaylist: false,
  }

  getPlaylistTracks = (playlist) => {
    axios
      .get(`${this.props.url}/${playlist.id}/tracks`, this.props.headers)
      .then((res) => {
        this.setState({ 
          playlistTracks: res.data.result.tracks, 
          playlist: playlist,
        })

      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  addPlaylist = () => {
    this.setState({
        addPlaylist: !this.state.addPlaylist
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

          let renderAddPlaylist

          if(this.state.addPlaylist){
            renderAddPlaylist = <>
                  <CriarPlaylist>
                    <input
                      name="playlistName"
                      placeholder="Nome da playlist"
                      value={this.props.playlistName}
                      onChange = {this.props.handleFieldChange}
                      >
                    </input>
                    <Button
                      onClick={()=>this.props.createPlaylist()} 
                      texto='Salvar'
                    />
                  </CriarPlaylist>
            </>
          }
        
          return (
            <>
              <Container>
                  <h2>Playlists</h2>
                  <ButtonContainer 
                    onClick={this.addPlaylist}
                    icone={<BsFillPlusSquareFill />}
                    texto="Criar playlist"
                  />
                  {renderAddPlaylist}
                  <hr/>
                  {playList}
              </Container>
              <Playlist 
                playlistTracks={this.state.playlistTracks}
                playlist={this.state.playlist}
                url={this.props.url}
                headers={this.props.headers}
                atualizaTracks={this.getPlaylistTracks}
                />
            </>       
        )
    }
}