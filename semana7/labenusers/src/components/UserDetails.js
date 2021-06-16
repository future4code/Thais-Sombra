import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IoIosArrowBack } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { IoCloseCircle } from 'react-icons/io5';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaSave } from 'react-icons/fa';
import IconButton from './IconButton';
import Campo from './Campo'
import Title from './Title';

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
`

const FieldNameEmail = styled.div`
  display:flex;
  flex-direction: column;
  text-align: left;
  border-radius: 5px;
  width: 300px;

  p {
    margin: 2px;
  }
`

const FieldEditeUSer = styled.div`
  display:flex;
  flex-direction: row;
  text-align: left;
  height: auto;
  background-color: white;
  border-radius: 5px;
  width: auto;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  padding: 15px;
`

const FieldEditContainer = styled.div`
  display:flex;
  flex-direction: column;
  text-align: left;
  height: auto;
  width: auto;
  background-color: white;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  padding: 15px;
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
      this.props.userDetails()
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

          editButton = <IconButton
                          onClick={()=>this.inputEditUser()}
                          icone={<MdEdit/>}
                        />

        } else {
          editUSerFields= <FieldEditContainer>
                            <Campo
                                  icone ={<FaUserAstronaut/>}
                                  placeholder='Nome'
                                  value={this.state.userName}
                                  onChange={this.onChangeUserName}
                                />
                              <Campo
                                  icone ={<FiMail/>}
                                  placeholder='E-mail'
                                  value={this.state.userEmail}
                                  onChange={this.onChangeUserEmail}
                                />
                          </FieldEditContainer>

          editButton = <IconButton
                          onClick={()=>this.editUser(this.state.userId)}
                          icone={<FaSave/>}
                        />
        }

      return (<>     
                <Title 
                  texto = "Edit User >>>>>"
                />
                <FieldEditeUSer>
                  {editUSerFields}
                  <Buttons>
                  <IconButton
                        onClick={()=>this.props.deleteUser(this.state.userId)}
                        icone={<IoCloseCircle/>}
                      />
                      <IconButton
                        onClick={()=>this.props.userDetails(this.state.userId)}
                        icone={<IoIosArrowBack/>}
                      />
                      {editButton}
                  </Buttons>  
                </FieldEditeUSer>
              </>
        )
    }
}