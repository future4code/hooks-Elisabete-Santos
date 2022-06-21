import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, logout, goHome } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header'

const CreateTripPage = () => {

   const navigate = useNavigate()

   return (

      <div>
         <Header
            first={{ function: goHome, text: "Início" }}
            second={{ function: logout, text: "Logout" }}
         />

         <p>Formulário para o administrador criar uma nova viagem</p>

         <button onClick={() => goBack(navigate)}>Voltar</button>
         <button>Criar</button>
      </div>
   )
}

export default CreateTripPage