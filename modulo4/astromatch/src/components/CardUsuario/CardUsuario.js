import React from 'react'
import { MainContainer } from "./styled"


const CardUsuario = (props) => {
   return (
      <MainContainer>
         <img src={props.perfil.photo} alt="Foto do usuário" />
         <div>
            <span>
               <h2>{props.perfil.name}, {props.perfil.age}</h2>
            </span>
            <p>{props.perfil.bio}</p>
         </div>
      </MainContainer>
   );
}

export default CardUsuario