import React from "react";
import axios from "axios"
import { BASE_URL } from '../../constants/urls'
import { HEADERS } from "../../constants/headers"
import styled from "styled-components"
import ImgFundo from "../../imagem/fundo.jpg"


class CriarPlaylist extends React.Component {
   state = {
      inputPlaylist: "",
   };

   onChancePlaylist = (event) => {
      this.setState({ inputPlaylist: event.target.value });
   };

   createPlaylist = () => {
      const body = {
         name: this.state.inputPlaylist,
      };
      axios
         .post(`${BASE_URL}`, body, HEADERS)
         .then((res) => {
            alert(`Playlist ${this.state.inputPlaylist} cria com sucesso`);
            this.setState({ inputPlaylist: "" });
         })
         .catch((err) => {
            alert(err.response.data.message);
         });
   };

   render() {
      return (
         <MainContainer>
            <h1>Crie sua Playlist</h1>
            <Label>
               <input
                  placeholder="Nome da Playlist"
                  value={this.state.inputPlaylist}
                  onChange={this.onChancePlaylist}
               />
               <button onClick={this.createPlaylist}>Criar Playlist</button>
            </Label>
            <ButtonVisualizar onClick={() => this.props.goPagina("visualizarPlaylist")}>
               Visualizar PlayList
            </ButtonVisualizar>
         </MainContainer>
      );
   }
}

export default CriarPlaylist;


// ESTELIZAÇÃO DA PÁGINA
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
  background-image: url(${ImgFundo});
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: 20%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  h1 {
      padding-top: 15rem;
      font-size: 2.5rem;
      color: #F08080;
      margin-left: 800px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: black;
    h2 {
       position: relative;
      padding-top: 4rem;
      font-size: 2rem;
      color: #1e90ff;
    }
  }
`;

const Label = styled.div`
  input {
   /* border-top: none;
   border-left: none;
   border-right: none; */
   width: 25rem;
   height: 2rem;
   color: #fff;
   border-radius: 5px;
   border-color: #F08080;
   background-color: black;
   font-size: 1.1rem;
   margin-top: 1rem;
   margin-left: 800px;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 13rem;
    
  }
  }
  button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 4rem;
      margin-left: 120px;
      border-radius: 2rem;
      border-color: #F08080;
      color: #F08080;
      width: 10rem;
      height: 2.5rem;
      background-color: black;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      margin-left: 920px;

      :hover {
         color: #F08080;
         background-color: #fff;
      }
  }
`;

const ButtonVisualizar = styled.button`
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
      margin-left: 790px;
  
  :hover {
    color: #F08080;
    background-color: #fff;
  }
`;