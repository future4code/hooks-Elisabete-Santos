import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers"
import styled from "styled-components";
import lixeira from "../../imagem/lixeira.png"


class VisualizarPlaylist extends React.Component {
   state = {
      arrayPlaylist: [],
   };

   componentDidMount() {
      this.getAllPlaylists();
   }

   getAllPlaylists = () => {
      axios
         .get(`${BASE_URL}`, HEADERS)
         .then((res) => {
            this.setState({ arrayPlaylist: res.data.result.list });
         })
         .catch((err) => {
            alert(err.response)
         })
   };

   deletePlaylist = (id) => {
      if (window.confirm("Tem certeza que deseja deletar essa Playlist?")) {
         axios.delete(`${BASE_URL}/${id}`, HEADERS)
            .then((res) => {
               alert("Playlist deletada!")
               this.getAllPlaylists()
            })
            .catch((err) => {
               alert(err.response)
            })
      }
   }

   detalhesMusica = (id, name) => {
      this.props.pegaIdPlaylist(id);
      this.props.pegarNomePlaylist(name);
      this.props.goPagina("detalhes");
   }

   render() {
      const mostrarLista = this.state.arrayPlaylist.map((musica) => {
         return (
            <CardDiv>
               <CharacterCard
                  key={musica.id}
                  onClick={() => this.detalhesMusica(musica.id, musica.name)}
               >
                  {musica.name}
               </CharacterCard>
               <ButtonLixeira onClick={() => this.deletePlaylist(musica.id)}>
                  <img src={lixeira} alt="lixeira" />
               </ButtonLixeira>
            </CardDiv>
         );
      });

      return (
         <MainContainer>
            <h1>Suas Playlists</h1>
            <ul>
               {mostrarLista}
            </ul>
            <ButtonList onClick={() => this.props.goPagina("criarPlaylist")}>
               Criar Playlist
            </ButtonList>

         </MainContainer>
      );
   }
}

export default VisualizarPlaylist;



//ESTILIZAÇÃO DA PÁGINA
const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: black;
   width: 100%;
   padding-bottom: 100%;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   h1{
      padding-top: 4rem;
      font-size: 2.5rem;
      color: #F08080;
   }
`;

const CardDiv = styled.span`
  display: flex;
  align-items: center;
`;

const CharacterCard = styled.li`
 color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 3rem;
  border-radius: 10px;
  margin: 10px;
  //border-color: #1E90FF;
  box-shadow: 1px 1px 3px 2px #F08080;
  margin-bottom: 10px;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #F08080;
  }
`;

const ButtonLixeira = styled.button`
   border-radius: 5px;
   background-color: #F08080;
   border: none;
   transition: transform 0.3s;
   color: #1E90FF;
   font-size: 1.2rem;
   cursor: pointer;
   margin-left: 5px;
   padding: 6px;

   &:hover {
      cursor: pointer;
      background-color: #f5485f;
   }
   :active {
      background-color: #f5485f;
      color: #fff;
   }
  
`

const ButtonList = styled.button`
      margin-top: 1.5rem;
      border-radius: 4rem;
      border-color: #F08080;
      color: #F08080;
      background-color: black;
      width: 12rem;
      height: 3rem;
      font-size: 0.98rem;
      font-weight: bold;
      cursor: pointer;
  
  :hover {
    color: #F08080;
    background-color: #fff;
  }
`