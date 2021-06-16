import './App.css';
import React from 'react';
import styled from 'styled-components';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import UserList from './components/UserList';
import Register from './components/Register';
import Button from './components/Button'


const MainContainer = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ButtonChangePage = styled.button`
    background-color: white;
    color: black;
    text-transform: uppercase;
    outline: none;
    border:none;
    padding: .78rem 1.5rem;
    font-weight:700;
    text-align: center;
    margin: 30px;
    border-radius: 5px;
    cursor: pointer;
`

const Header = styled.div`
  display: flex;
`

export default class App extends React.Component {

  state = {
    render: 'Register new user',  
    buttonText: 'User List', 
  }

  changePage = () => {
    if (this.state.render === "User List") {
      this.setState ({
        buttonText: this.state.render,
        render: "Register new user",
      })
    } else {
      this.setState ({
        buttonText: this.state.render,
        render: "User List",
      })
    }
  }  

  render () {

    let renderPage

    switch (this.state.render){
      case "Register new user":
        renderPage = <Register />
        break
      case 'User List':
        renderPage = <UserList />         
        break
      default:
        return <></>
    }
    
    return (
      <MainContainer>
        <Header className="App-header">
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
          <Button 
            onClick={this.changePage}
            value={this.state.buttonText}
            icone={<FaArrowRight/>}
          />
        </Header>
       {renderPage}
      </MainContainer>
    )
  }
}