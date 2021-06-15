import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Title = styled.h2`
  color: white;
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: "thais-sombra-molina"
  }
}

export default class UserList extends React.Component {

    state = {
        usersList: [],
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

    render(){
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
             <Main>
              <Title>Users List</Title>
              {userList}
            </Main>
        )
  }
}