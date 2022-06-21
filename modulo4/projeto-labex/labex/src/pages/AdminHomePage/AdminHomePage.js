import React from 'react'
import { useNavigate } from "react-router-dom"
import { goToCreatTrip } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header'

const AdminHomePage = () => {

   const navigate = useNavigate()

   const logout = () => {
      navigate("/login");
   };


   return (
      <div>
         <Header
            first={{ function: goToCreatTrip, text: "Criar Viagem", }}
            second={{ function: logout, text: "Logout", }}
         />
         <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
      </div>
   )
}

export default AdminHomePage