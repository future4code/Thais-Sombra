import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Button from './Button'
import Campo from './Campo'
import Title from './Title';

const UserForm = styled.div`
    height: 250px;
    display:flex;
    flex-direction:column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
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
                <Title 
                  texto = "Create User"
                />
                <Campo
                  icone ={<FaUserAstronaut/>}
                  placeholder='Nome'
                  value={this.state.inputUserName}
                  onChange={this.onChangeUserName}
                />
                 <Campo
                  icone ={<FiMail/>}
                  placeholder='E-mail'
                  value={this.state.inputUserEmail}
                  onChange={this.onChangeUserEmail}
                />

                <Button 
                  onClick={this.createUser}
                  value="Save"
                />
            </UserForm>
        )
    }
}