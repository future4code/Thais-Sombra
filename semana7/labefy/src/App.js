import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {RiNeteaseCloudMusicFill} from 'react-icons/ri';
import PlaylistsContainer from './components/PlaylistsContainer'
import Playlist from './components/Playlist';


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
        console.log(this.state.allPlayLists)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  render (){

    return (
      <div className="App">
        <header className="App-header">
          <RiNeteaseCloudMusicFill className="App-logo" /> 
        </header>
        <main>
          <PlaylistsContainer
            playlist={this.state.allPlayLists}
            playlistName = {this.state.playlistName}
            handleFieldChange = {this.handleFieldChange}
            createPlaylist={this.createPlaylist}
          />
    
          <Playlist />
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}