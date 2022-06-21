import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, goToListTrip, goHome } from "../../routes/Coordinator";
import { Header } from '../../components/Header/Header'

const LoginPage = () => {

   const navigate = useNavigate()

   const onSubmitLogin = () => {

   }

   return (
      <div>
         <Header
            first={{ function: goToListTrip, text: "Início" }}
            second={{ function: goHome, text: "Viagens" }}
         />
         <p>Para fazermos login como administrador</p>
         <button onClick={onSubmitLogin}>ENTRAR</button>
         <button onClick={() => goBack(navigate)}>VOLTAR</button>
      </div>
   )
}

export default LoginPage