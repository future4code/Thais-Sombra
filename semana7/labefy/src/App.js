import './App.css';
import React from 'react';
import styled from 'styled-components';
import {RiNeteaseCloudMusicFill} from 'react-icons/ri';
import PlaylistsContainer from './components/PlaylistsContainer'
import Playlist from './components/Playlist';

export default class App extends React.Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <RiNeteaseCloudMusicFill className="App-logo" /> 
        </header>
        <main>
          <PlaylistsContainer />
          <Playlist />
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}
