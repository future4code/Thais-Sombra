import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {RiNeteaseCloudMusicFill} from 'react-icons/ri';
import PlaylistsContainer from './components/PlaylistsContainer'

const TextoFooter = styled.p`
  color: white;
  opacity: 0.6;
  align-self: right;

`  

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

const headers = {
  headers: {
    Authorization: 'thais-sombra-molina'
  }
}

export default class App extends React.Component {

  state = {
    allPlayLists: [],  
    playlistName: '', 
    playlistDetails:'',
  }

  componentDidMount () {
    this.getAllPlaylists()  
  }

  handleFieldChange = event => {     
    this.setState({[event.target.name]:event.target.value})  
  }

  createPlaylist = () => {
    const body = {
      name:this.state.playlistName,      
    }
    axios
      .post(url,body,headers)
      .then((res)=>{
        alert('Playlist criada com sucesso!')
        this.setState({playlistName:''})  
        this.getAllPlaylists()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  getAllPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ allPlayLists: res.data.result.list })
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  deletePlaylist = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta playlist?")){
      axios
        .delete(`${url}/${id}`,headers)
        .then((res)=>{
          this.getAllPlaylists()
        })
        .catch((err)=>{
          alert(err.response.data.message)
        })
    }
  }

  
  render (){

    return (
      <div className="App">
        <header className="App-header">
          <RiNeteaseCloudMusicFill className="App-logo" /> 
          <h1>Labefy</h1>
        </header>
        <main>
          <PlaylistsContainer
            playlist={this.state.allPlayLists}
            playlistName = {this.state.playlistName}
            handleFieldChange = {this.handleFieldChange}
            createPlaylist={this.createPlaylist}
            deletePlaylist={this.deletePlaylist}
            url={url}
            headers={headers}
          />
        </main>
        <footer>
          <TextoFooter>Desenvolvido por Thaís Sombra como<br></br>requisito do Bootcamp Labenu</TextoFooter>
        </footer>
      </div>
    )
  }
}
