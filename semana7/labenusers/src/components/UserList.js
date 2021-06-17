import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io'
import { IoCloseCircle } from 'react-icons/io5';
import UserDetails from './UserDetails';
import IconButton from './IconButton';
import Title from './Title';
import { FaSearch } from 'react-icons/fa';
import Search from './Search';

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

const Box = styled.div`
  display: flex;
  flex-direction: column;
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
        refreshUserDetails: false,
        userName:'',
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

    onChangeSearch = (event) => {
      this.setState({userName: event.target.value})
    }
    
    searchUsers = () => {
      axios.get(url,headers)
      .then((res)=> {
        this.setState({})
      })
    }

  render(){

    
    const userList = this.state.usersList.map((user) => {
      return (
        <Campo>
            <p key={user.id}>
              {user.name}</p>
              <Buttons>
                <IconButton
                  onClick={()=>this.deleteUSer(user.id)}
                  icone={<IoCloseCircle/>}
                />
                <IconButton
                  onClick={()=>this.userDetails(user.id)}
                  icone={<IoIosArrowForward/>}
                />
              </Buttons>  
        </Campo>
      )
    })

      let userBox
      
      if (this.state.userDetailsBox){
        userBox = <UserDetails 
                    user={this.state.userId}
                    deleteUser = {this.deleteUSer}
                    userDetails = {this.userDetails}
                    getAllUsers={this.getAllUsers}
                    editUser={this.editUser}
                  />
      }
        return (<>
              <Search
                  placeholder="Search a user"
                  value="user"
                  onChange={this.onChangeSearch}
                  icone={<FaSearch />}
                />
                
              <Main>
                <Box>
                  <Title 
                    texto = "Users List"
                  />
                  {userList}
                </Box>
                  {userBox}
              </Main>
            </>
        )
  }
}