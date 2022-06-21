import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/Base_url";
import { goBack, goToListTrip, goHome } from "../../routes/Coordinator";
import { Header } from '../../components/Header/Header'
import { MainForm, ButtonDiv } from "./styled"

const LoginPage = () => {

   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");

   const onChangeEmail = (event) => {
      setEmail(event.target.value)
   }

   const onChangeSenha = (event) => {
      setSenha(event.target.value)
   }

   const onSubmitLogin = () => {
      const body = {
         email: email,
         password: senha,
      };
      axios
         .post(`${BASE_URL}/login`, body)
         .then((response) => {
            navigate("/admin/trips/list");
            localStorage.setItem("token", response.data.token);
         })
         .catch((error) => {
            alert("Login ou senha não autorizado");
         })
   }

   useEffect(() => {
      if (localStorage.getItem("token")) {
         navigate("/admin/trips/list");
      }
   })

   return (
      <div>
         <Header
            first={{ function: goToListTrip, text: "Início" }}
            second={{ function: goHome, text: "Viagens" }}
         />
         <MainForm>
            <h2>Área Administrativa</h2>
            <input
               placeholder="Login"
               type="email"
               value={email}
               onChange={onChangeEmail}
            />

            <input
               placeholder="Senha"
               type="senha"
               value={senha}
               onChange={onChangeSenha}
            />
            <ButtonDiv>
               <button onClick={onSubmitLogin}>ENTRAR</button>
               <button onClick={() => goBack(navigate)}>VOLTAR</button>
            </ButtonDiv>
         </MainForm>
      </div>
   )
}

export default LoginPage