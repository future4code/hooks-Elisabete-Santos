import React from 'react'
import { useNavigate } from "react-router-dom"
import { goBack, goToLoignPage, goHome } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header';

const ApplicationFormPage = () => {

   const navigate = useNavigate();

   return (
      <div>
         <Header
            first={{ function: goHome, text: "Inicio" }}
            second={{ function: goToLoignPage, text: "Login" }}
         />
         <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>

         <button>Enviar</button>
         <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
   )
}

export default ApplicationFormPage