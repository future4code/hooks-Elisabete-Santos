import React from "react";
import { ContainerHeader, Logo } from "./styled";
import logoImage from './logo.png';
import { ImUsers } from 'react-icons/im';
import { ImHome } from 'react-icons/im';

export const Header = (props) => {
   const inicial = () => {
      props.onChangePagina("usuarios");
   };

   const matches = () => {
      props.onChangePagina("matches");
   };

   return (
      <ContainerHeader>
         <button onClick={inicial}> <ImHome size={25} /> </button>
         <Logo src={logoImage} />
         <button onClick={matches}><ImUsers size={25} /></button>
      </ContainerHeader >

   );
};