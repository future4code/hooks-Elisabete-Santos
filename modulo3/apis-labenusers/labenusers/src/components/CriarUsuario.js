import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
   headers: {
      Authorization: "renan-alencar-shaw",
   },
};

class CriarUsuario extends React.Component {
   state = {
      inputNome: "",
      inputEmail: "",
   };

   onChangeNome = (event) => {
      this.setState({ inputNome: event.target.value });
   };

   onChangeEmail = (event) => {
      this.setState({ inputEmail: event.target.value });
   };

   createUser = () => {
      const url =
         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      const body = {
         name: this.state.inputNome,
         email: this.state.inputEmail,
      };
      axios
         .post(url, body, headers)
         .then(() => {
            alert(`Usuário ${this.state.inputNome} criado com sucesso!`);
            this.setState({ inputNome: "", inputEmail: "" });
         })
         .catch(() => {
            alert("Erro, tente novamente!");
         });
   };

   render() {
      return (
         <Div>

            <h2>Cadastrar Usuário</h2>
            <h3>Coloque seus dados abaixo ;)</h3>
            <input
               placeholder="Usuário"
               value={this.state.inputNome}
               onChange={this.onChangeNome}
            />
            <input
               placeholder="E-mail"
               value={this.state.inputEmail}
               onChange={this.onChangeEmail}
            />
            <BtnCriarUsuario onClick={this.createUser}>Criar Usuário</BtnCriarUsuario>
            <BtnMudarTela onClick={this.props.listaUsuarios}>Mudar Tela</BtnMudarTela >
         </Div >
      );
   }
}

export default CriarUsuario;

let Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  height: 300px;
  background-color: 	#F08080;
  border-radius: 15px;
  font-weight: 600;

  h2{
     margin-top: 10px;
     margin-bottom: 2px;
     padding: 0px;
  }

  input{
  width: 50%;
  height: 20px;
  border-radius: 4px;
  margin: 5px;;
  }

`;

let BtnCriarUsuario = styled.button`
  text-align: center;
  margin-top: 10px;
  border: 1px solid #DC143C;
  border-radius: 3px;
  top: -60px;
  width: 150px;
  height: 35px;
  font-weight: bold;
  background-color: #DC143C;

  &:hover{
     background-color: #CD5C5C;
  }
`;

let BtnMudarTela = styled.button`
  text-align: center;
  margin-top: 10px;
  border: 1px solid #DC143C;
  border-radius: 3px;
  top: -60px;
  width: 150px;
  height: 35px;
  font-weight: bold;
  background-color: #DC143C;

  &:hover{
     background-color: #CD5C5C;
  }
`;