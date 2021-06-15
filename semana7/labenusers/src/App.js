import './App.css';
import React from 'react';
import styled from 'styled-components';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoCloseCircle } from 'react-icons/io5'
import axios from 'axios';


const MainContainer = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  background-color: #282c34;
  height: 50vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction:column;
`

const UserForm = styled.div`
    height: 250px;
    display:flex;
    flex-direction:column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
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

const Input = styled.input`
    border:none;
    width:100%;
    padding-left: 0px;
    font-size: 1.2rem;
    border-style: none;
`

const Icones = styled.i`
    margin: 15px;
    color: darkgray;
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
    .then((res) => {
      this.getAllUsers();
    })
    .catch((err) =>{
      alert(err.response.data.message)
    })
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
        <UserForm>
          <Title>Cadastrar Usuário</Title>
          <Campo>
            <Icones> <FaUserAstronaut /> </Icones>
              <Input 
                type="text" 
                placeholder='Nome'
                value={this.state.inputUserName}
                onChange={this.onChangeUserName}
              />
          </Campo>
          <Campo>
            <Icones> <FiMail /> </Icones>
              <Input
                type="text" 
                placeholder='e-mail'
                value={this.state.inputUserEmail}
                onChange={this.onChangeUserEmail}
              />
          </Campo>
          <BotaoLogar onClick={this.createUser} >Salvar</BotaoLogar>
        </UserForm>
        <Main>
          <Title>Usuários Cadastrados</Title>
          {userList}
        </Main>
      </MainContainer>
    )
  }
}