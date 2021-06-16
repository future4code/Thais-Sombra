import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdDetails } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

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
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
`

const DetailsButton = styled.span`
  color: darkgray;
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  cursor: pointer;
    &:hover {
      color:red;
    };
`

const FieldNameEmail = styled.div`
  display:flex;
  flex-direction: column;
  text-align: left;

p {
  margin: 2px;
}

`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'

const headers = {
  headers: {
    Authorization: "thais-sombra-molina"
  }
}

export default class UserDetails extends React.Component {

  state={
    userName:'',
    userEmail:'',
    userId: '',
  }

  componentDidMount () {
    this.getUserById(this.props.user)
  }

  getUserById = (user) => {
    axios.get((url+user),headers)
    .then((res) => {
      this.setState({
        userName:res.data.name,
        userEmail: res.data.email,
        userId: res.data.id,
      })
    })
    .catch((err) =>{
      alert(err.response.data.message)
    })
  }
    render(){
        return (
          <Campo>
            <FieldNameEmail>
              <p><FaUserAstronaut /> {this.state.userName}</p>
              <p><FiMail /> {this.state.userEmail}</p>
            </FieldNameEmail>
            <Buttons>
              <DetailsButton><IoCloseCircle onClick={()=>this.props.deleteUser(this.state.userId)}/></DetailsButton>
              <DetailsButton><MdDetails /></DetailsButton>
              <DetailsButton><MdEdit /></DetailsButton>
            </Buttons>  
        </Campo>
        )
    }
}