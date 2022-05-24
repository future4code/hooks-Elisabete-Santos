import React from "react";
import axios from "axios";
import DetalhesUsuario from "./DetalhesUsuario";
import styled from 'styled-components'


const headers = {
   headers: {
      Authorization: "renan-alencar-shaw",
   },
};

class ListaUsuarios extends React.Component {
   state = {
      listaUsuarios: [],
      trocarPagina: "listaUsuarios",
      idUsuario: "",
   };

   componentDidMount() {
      this.listaUsuarios();
   }

   listaUsuarios = async () => {
      const url =
         "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      try {
         const response = await axios.get(url, headers);
         this.setState({ listaUsuarios: response.data });
      } catch {
         alert("Ocorreu um erro!");
      }
   };

   deleteUser = (id) => {
      if (window.confirm("Tem certeza que deseja deletar?")) {
         if (this.state.idUsuario === "") {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
            axios
               .delete(url, headers)
               .then(() => {
                  alert("usuário deletado");
                  this.listaUsuarios();
               })
               .catch(() => {
                  alert("usuário não deletado");
               });
         } else {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.idUsuario}`;
            axios
               .delete(url, headers)
               .then(() => {
                  alert("usuário deletado");
                  this.setState({ trocarPagina: "listaUsuarios" });
                  this.listaUsuarios();
               })
               .catch(() => {
                  alert("usuário não deletado");
               });
         }
      }
   };

   detalhesUsuario = (id) => {
      switch (this.state.trocarPagina) {
         case "detalhesUsuarios":
            return this.setState({ trocarPagina: "listaUsuarios" });
         case "listaUsuarios":
            return this.setState({
               idUsuario: id,
               trocarPagina: "detalhesUsuarios",
            });
         default: return <div>Erro! Página não encontrada :( </div>;
      }
   };

   render() {
      const mostrarLista = this.state.listaUsuarios.map((user) => {
         return (
            <Divlista>
               <li key={user.id}>
                  <span onClick={() => this.detalhesUsuario(user.id)}>{user.name}</span>
                  <button onClick={() => this.deleteUser(user.id)}>X</button>
               </li>
            </Divlista>
         );
      });

      return (
         <Div>
            {this.state.trocarPagina === "listaUsuarios" ? (
               <div>
                  <h2>Lista de Usuários</h2>
                  {mostrarLista}
               </div>
            ) : (
               <DetalhesUsuario
                  idUsuario={this.state.idUsuario}
                  detalhesUsuario={this.detalhesUsuario}
                  deleteUser={this.deleteUser}
               />
            )}
            <BtnMudarTela onClick={this.props.criarUsuario}>Mudar Tela</BtnMudarTela>
         </Div>
      );
   }
}

export default ListaUsuarios;

let Divlista = styled.div`
   border: 1px solid #F08080;

   li {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
   
      button{
         background-color: #F08080;
         border: none;
         font-size: 16px;
         font-weight: bold;
         margin-left: 10px;
         color:#8B0000;
         position: relative;
      }
   }
`


let Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  height: 400px;
  background-color: 	#F08080;
  border-radius: 15px;
  font-weight: 600;

  h2{
     margin-top: 10px;
     margin-bottom: 15px;
     padding: 0px;
  }

  input{
  width: 50%;
  height: 20px;
  border-radius: 4px;
  margin: 5px;;
  }

`;

let BtnMudarTela = styled.button`
  text-align: center;
  margin-top: 10px;
  border: 1px solid #DC143C;
  border-radius: 3px;
  margin-top: 25px;
  width: 150px;
  height: 35px;
  font-weight: bold;
  background-color: #DC143C;

  &:hover{
     background-color: #CD5C5C;
  }
`;

