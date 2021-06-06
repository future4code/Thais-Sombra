import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const arrayPosts = [
  {
    nomeUsuario: 'paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: 'https://picsum.photos/200/150'
  },
  {
    nomeUsuario: 'joãozinho',
    fotoUsuario: 'https://picsum.photos/50/51',
    fotoPost: 'https://picsum.photos/200/151'
  },
  {
    nomeUsuario: 'pedrinho',
    fotoUsuario: 'https://picsum.photos/50/52',
    fotoPost: 'https://picsum.photos/200/152'
  }  
]

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`


class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: '',
    userPhoto: '',
    postPhoto: ''
  }

  changeUserName = (event) => {
    this.setState({ userName: event.target.value})
  }

  changeUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value})
  }

  changePostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value})
  }

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    }

    this.setState({
      posts: [...this.state.posts, newPost],
      userName:'',
      userPhoto:'',
      postPhoto:''
    })
  }

  render() {
  const ListaDePosts = this.state.posts.map((post)=>{
    return (
      <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
      />
    )
  })

    return (
      <MainContainer>
        <FormContainer>
          <input 
          placeholder = {'Nome do Usuário'}
          value = {this.state.userName}
          onChange = {this.changeUserName}
          />
          <input 
          placeholder = {'Foto do Usuário'}
          value = {this.state.userPhoto}
          onChange = {this.changeUserPhoto}
          />
          <input 
          placeholder = {'Foto do Post'}
          value = {this.state.postPhoto}
          onChange = {this.changePostPhoto}
          />
          <button onClick={this.addNewPost}>Criar Post</button>
        </FormContainer>
        {ListaDePosts}
      </MainContainer>
    );
  }
}

export default App;
