import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/51'}
        fotoPost={'https://picsum.photos/200/151'}
      />
      {/* <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/52'}
        fotoPost={'https://picsum.photos/200/152'}
      />
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/53'}
        fotoPost={'https://picsum.photos/200/153'}
      /> */}

    </AppContainer>
  );
}


export default App;
