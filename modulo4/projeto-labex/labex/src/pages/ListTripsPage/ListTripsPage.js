import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToApplicationForm, goBack, goHome, goToLoignPage } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header'

const ListTripsPage = () => {

   const navigate = useNavigate()

   return (
      <div>
         <Header
            first={{ function: goHome, text: "Inicio", }}
            second={{ function: goToLoignPage, text: "Login", }}
         />
         <p>Para vermos todas as viagens</p>
         <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
   )
}

export default ListTripsPage