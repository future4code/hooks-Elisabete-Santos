import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { HEADERS } from "../constants/headers";
import styled from "styled-components";


class AddMusica extends React.Component {
   state = {
      inputNome: "",
      inputCantor: "",
      inputURL: "",
   };

   addTrackToPlaylist = () => {
      const url = `${BASE_URL}/${this.props.idPlaylist}/tracks`;
      const body = {
         name: this.state.inputNome,
         artist: this.state.inputCantor,
         url: this.state.inputURL,
      };
      axios
         .post(url, body, HEADERS)
         .then((res) => {
            this.props.getPlaylistTracks();
            this.setState({ inputNome: "", inputCantor: "", inputURL: "" });
         })
         .catch((err) => {
            alert(err.response);
         });
   };

   onChangeNome = (event) => {
      this.setState({ inputNome: event.target.value });
   };
   onChangeCantor = (event) => {
      this.setState({ inputCantor: event.target.value });
   };
   onChangeURL = (event) => {
      this.setState({ inputURL: event.target.value });
   };

   render() {
      return (
         <MainContainer>
            <h2>Adicionar uma música</h2>
            <Form>
               <input
                  placeholder="Nome da Música"
                  value={this.state.inputNome}
                  onChange={this.onChangeNome}
               />

               <input
                  placeholder="Cantor/Grupo/Banda"
                  value={this.state.inputCantor}
                  onChange={this.onChangeCantor}
               />

               <input
                  placeholder="Link da Música"
                  value={this.state.inputURL}
                  onChange={this.onChangeURL}
               />
            </Form>

            <span>
               <button onClick={this.addTrackToPlaylist}>Adicionar</button>
            </span>
         </MainContainer>
      );
   }
}

export default AddMusica;


//ESTELIZAÇÃO DA PÁGINA
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  padding-bottom: 10%;
  padding-left: 40px;
  padding-top: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;;
  h2 {
      padding-top: 2rem;
      font-size: 2.5rem;
      color: #F08080;
  }
  span {
    text-align: center;
    margin-top: 10px;
   }
  
  button {
   margin-top: 1.5rem;
      border-radius: 4rem;
      border-color: #F08080;
      color: #F08080;
      background-color: black;
      width: 10rem;
      height: 3rem;
      font-size: 0.98rem;
      font-weight: bold;
      cursor: pointer;
  
  :hover {
    color: #F08080;
    background-color: #fff;
  }

  :active {
      background-color: #f5485f;
      color: #fff;
   }

  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
   border-radius: 5px;
   box-shadow: 1px 1px 3px 2px #F08080;
   width: 20rem;
   height: 2rem;
   color: #fff;
   border-color: #F08080;
   background-color: black;
   font-size: 1.1rem;
   margin-top: 1rem;
  }
`;