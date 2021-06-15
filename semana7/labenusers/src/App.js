import './App.css';
import React from 'react';
import styled from 'styled-components';
import { FaUserAstronaut } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios';

import UserList from './components/UserList'
import Register from './components/Register'


const MainContainer = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.div`
  background-color: #282c34;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction:column;
`

const Campo = styled.div`
    display:flex;
    background-color: white;
    color:black;
    border-radius: 5px;
    height: 50px;
    width: 300px;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
`

const BotaoLogar = styled.button`
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

const DeleteButton = styled.span`
    color: red;

`

const Title = styled.h2`
  color: white;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
      @media (max-width: 900px){
        flex-direction: column;
      }
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: "thais-sombra-molina"
  }
}

export default class App extends React.Component {


  state = {
    usersList: [],
    inputUserName:'',
    inputUserEmail:'', 
    render: 'Register new user',  
    buttonText: 'Register new user', 
  }

  onChangeUserName = (event) => {
    this.setState({inputUserName: event.target.value})
  }

  onChangeUserEmail = (event) => {
    this.setState({inputUserEmail: event.target.value})
  }

  componentDidMount () {
    this.getAllUsers();
  }

  createUser = () => {
    const body = {
      name: this.state.inputUserName,
      email: this.state.inputUserEmail
    };

    axios.post(url, body, headers)
      .then((res) => {
        res = "Usuário cadastrado com sucesso!"
        alert(res);
        this.setState({ 
          inputUserName: '',
          inputUserEmail: '' 
        })
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  getAllUsers = () => {
    axios.get(url, headers)
      .then((res) => {
        this.setState({ usersList: res.data })
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  deleteUSer = (userId) => {
    const urlDel = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
    axios.delete((urlDel+userId),headers)
    .then(() => {
      this.getAllUsers();
    })
    .catch((err) =>{
      alert(err.response.data.message)
    })
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
      this.getAllUsers()
    }
  }  

  render () {

    const userList = this.state.usersList.map((user) => {
      return (
        <Campo>
          <p key={user.id}>
            {user.name}</p>
          <p>  
            <DeleteButton>
              <IoCloseCircle onClick={()=>this.deleteUSer(user.id)}/>
            </DeleteButton> 
          </p>
        </Campo>
    )})
    
    let renderPage

    switch (this.state.render){
      case "Register new user":
        renderPage = <Register />
        break
      case 'User List':
        renderPage = <UserList/>         
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
          <BotaoLogar onClick={this.changePage}>{this.state.buttonText} <FaArrowRight/></BotaoLogar>
        </Header>
       {renderPage}
      </MainContainer>
    )
  }
}