import React from 'react'
import { logout, goBack } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header'

const TripDetailsPage = () => {
   return (
      <div>
         <Header
            first={{ function: goBack, text: "Voltar" }}
            second={{ function: logout, text: "Sair" }}
         />
         <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
      </div>
   )
}

export default TripDetailsPage