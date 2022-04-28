import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 1px 5px #203242;
  grid-row: 3/4;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;

  input {
    height: 35px;
    border-radius: 8px;
    text-align: center;
    border: none;
    outline: none;
    margin: 5px;
  }

  button {
    width: 80px;
    height: 35px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #0d9b9b;
    border-radius: 8px;
    font-weight: bold;

    &:hover {
      background-color:  #0d9bf0;
      transition: all 0.2s;
    }
    
    &:not(:hover) {
      transition: all 0.2s;
    }
  }

`

class App extends React.Component {
  state = {
    posts: [

      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Gabriel",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Lunna",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ],
    valorInputnomeUsuario: "",
    valorInputfotoUsuario: "",
    valorInputfotoPost: "",
  }

  onChangeNomeUsuario = (event) => {
    this.setState({ valorInputnomeUsuario: event.target.value })
  }

  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputfotoUsuario: event.target.value })
  };

  onChangeFotoPost = (event) => {
    this.setState({ valorInputfotoPost: event.target.value })
  };

  onClickNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.valorInputnomeUsuario,
      fotoUsuario: this.state.valorInputfotoUsuario,
      fotoPost: this.state.valorInputfotoPost
    }

    const newPosts = [...this.state.posts, newPost]

    this.setState({
      posts: newPosts,
      valorInputnomeUsuario: '',
      valorInputotoUsuario: '',
      valorInputfotoPost: ''
    })

  }

  render() {

    const componentesPost = this.state.posts.map((post, indice) => {
      return (
        <Post key={indice}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <InputContainer>
          <input value={this.state.valorInputnomeUsuario} onChange={this.onChangeNomeUsuario} placeholder="Nome do Usuario " />
          <input value={this.state.valorInputfotoUsuario} onChange={this.onChangeFotoUsuario} placeholder="Link da Foto Usuario" />
          <input value={this.state.valorInputfotoPost} onChange={this.onChangeFotoPost} placeholder="Link da Foto Post" />
          <button onClick={this.onClickNewPost} >New Post</button>
        </InputContainer>
        {componentesPost}
      </MainContainer>
    );
  }
}

export default App;
