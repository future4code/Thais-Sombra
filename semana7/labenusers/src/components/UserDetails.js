import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdDetails } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaSave } from 'react-icons/fa';

const Campo = styled.div`
    display:flex;
    background-color: white;
    color:black;
    border-radius: 5px;
    min-height: 50px;
    height: auto;
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
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  };
  &:nth-child(1){
    color: red;
  };
  &:nth-child(2){
    transform: rotate(90deg);
    color: darkblue;
  };
  &:nth-child(3){
    color: darkmagenta;
  }
`

const FieldNameEmail = styled.div`
  display:flex;
  flex-direction: column;
  text-align: left;

p {
  margin: 2px;
}

`

const Input = styled.input`
    border:none;
    width:100%;
    padding-left: 0px;
    font-size: 1.2rem;
    border-style: none;
`

const Icones = styled.i`
    margin: 0px;
    color: darkgray;
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
    editUser: false,
  }
 
  onChangeUserName = (event) => {
    this.setState({userName: event.target.value})
  }

  onChangeUserEmail = (event) => {
    this.setState({userEmail: event.target.value})
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
  
  editUser = (user) => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    };
    axios.put((url+user),body,headers)
    .then((res)=> {
      alert("Alterações realizadas com sucesso!")
      this.setState({})
      this.setState({editUser: !this.state.editUser})
      this.props.getAllUsers()
    })
    .catch((err) =>{
      alert(err.response.data.message)
    })
  }

  inputEditUser = () =>{
    this.setState({editUser: !this.state.editUser})
  }

    render(){
      let editUSerFields
      let editButton
      if (!this.state.editUser){
          editUSerFields = <FieldNameEmail>
          <p><FaUserAstronaut /> {this.state.userName}</p>
          <p><FiMail /> {this.state.userEmail}</p>
        </FieldNameEmail>
          editButton = <DetailsButton><MdEdit onClick={()=>this.inputEditUser()}/></DetailsButton>
        } else {
          editUSerFields=   <Campo>
            <FieldNameEmail>
              <Icones> <FaUserAstronaut /> </Icones>
              <Input 
                type="text" 
                placeholder='Nome'
                value={this.state.userName}
                onChange={this.onChangeUserName}
              />
              <Icones> <FiMail /> </Icones>
              <Input
                type="text" 
                placeholder='e-mail'
                value={this.state.userEmail}
                onChange={this.onChangeUserEmail}
              />
            </FieldNameEmail>
          </Campo>
          editButton = <DetailsButton><FaSave onClick={()=>this.editUser(this.state.userId)}/></DetailsButton>
      }
        return (<>
          <Campo>
            {editUSerFields}
            <Buttons>
              <DetailsButton><IoCloseCircle onClick={()=>this.props.deleteUser(this.state.userId)}/></DetailsButton>
              <DetailsButton><MdDetails onClick={()=>this.props.userDetails(this.state.userId)}/></DetailsButton>
              {editButton}
            </Buttons>  
          </Campo>
</>
        )
    }
}