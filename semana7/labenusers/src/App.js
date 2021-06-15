import './App.css';
import React from 'react';
import styled from 'styled-components'
import { FaUserAstronaut } from 'react-icons/fa'
import axios from 'axios';


const MainContainer = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  background-color: #282c34;
  height: 100vh;
`
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: "thais-sombra-molina"
  }
}

export default class App extends React.Component {


  state = {
    usersList: [
      {
      name: '',
      email: '',
      }
    ],
    inputUserName:'',
    inputUserEmail:'',    
  }

  render () {
    return (
      <MainContainer>
        <header className="App-header">
          <FaUserAstronaut className="App-logo" alt="logo" />
          <p>
            Labenusers
          </p>
          <a
            className="App-link"
            href="https://documenter.getpostman.com/view/7549981/SzfCT5G2?version=latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Api Labenusers
          </a>
        </header>
        <Main>

        </Main>
      </MainContainer>
    )
  }
}