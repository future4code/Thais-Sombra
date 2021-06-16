import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

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

const Title = styled.h2`
  color: white;
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: "thais-sombra-molina"
  }
}

export default class Register extends React.Component {

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
    
    createUser = () => {
      const body = {
        name: this.state.inputUserName,
        email: this.state.inputUserEmail
      };
    
      axios.post(url, body, headers)
        .then((res) => {
          alert("Usuário cadastrado com sucesso!");
          this.setState({ 
            inputUserName: '',
            inputUserEmail: '' 
          })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      }

    render(){
        return (
            <UserForm>
                <Title>Create User</Title>
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
                <BotaoLogar onClick={this.createUser}>Save</BotaoLogar>
            </UserForm>
        )
    }
}