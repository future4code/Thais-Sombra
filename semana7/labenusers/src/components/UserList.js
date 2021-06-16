import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdDetails } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5';

import UserDetails from './UserDetails';

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

const Main = styled.div`
  background-color: #282c34;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction:row;
`

const Title = styled.h2`
  color: white;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
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
    color: darkblue;
  };
  &:nth-child(3){
    color: darkmagenta;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'

const headers = {
  headers: {
    Authorization: "thais-sombra-molina"
  }
}

export default class UserList extends React.Component {

    state = {
        usersList: [],
        userDetailsBox: false,
        userId: '',
    }
    
    componentDidMount () {
      this.getAllUsers();
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
      if (window.confirm("Tem certeza que deseja excluir o usuário?")){
        axios.delete((url+userId),headers)
          .then(() => {
            this.setState({userDetailsBox: false})
            this.getAllUsers();
          })
          .catch((err) =>{
            alert(err.response.data.message)
          })
      }
    }

    userDetails = (userId) => {
      this.setState({
        userDetailsBox: !this.state.userDetailsBox,
        userId: userId,
      })
    }
    
    render(){
      const userList = this.state.usersList.map((user) => {
        return (
          <Campo>
            <p key={user.id}>
              {user.name}</p>
              <Buttons>
                <DetailsButton><IoCloseCircle onClick={()=>this.deleteUSer(user.id)}/></DetailsButton>
                <DetailsButton><MdDetails onClick={()=>this.userDetails(user.id)}/></DetailsButton>
                <DetailsButton><MdEdit /></DetailsButton>
              </Buttons>  
          </Campo>
      )})
      
      let userBox
      
      if (this.state.userDetailsBox){
        userBox = <UserDetails 
                    user={this.state.userId}
                    deleteUser = {this.deleteUSer}
                    userDetails = {this.userDetails}
                    getAllUsers={this.getAllUsers}
                  />
      }
        return (
             <Main>
              <Box>
                <Title>Users List</Title>
                {userList}
              </Box>
                {userBox}
            </Main>
        )
  }
}