import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Base_url, Gif } from "../../constants/Url"
import ChoosePerson from '../../components/ChoosePerson/ChoosePerson';
import CardUsuario from '../../components/CardUsuario/CardUsuario';
import styled from 'styled-components'

const Imagem = styled.img`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 28rem;
  width: 21rem;
  box-shadow: 5px 5px 10px black;
  border-radius: 15px;
  overflow: hidden;
`


const Usuarios = () => {

   const [perfil, setPerfil] = useState([])
   const [atualizar, setAtualizar] = useState('false');
   const [isLoagind, setIsLoading] = useState(false)


   useEffect(() => {
      setIsLoading(true);
      axios.get(`${Base_url}/person`)
         .then((res) => {
            setPerfil(res.data.profile)
            setIsLoading(false);
         })
         .catch((err) => {
            alert("Houve um erro, tenta novamente")
            setIsLoading(false);
         })
   }, [atualizar])

   //Ao clicar no botão de Match ou recusar o match, ele muda o status do atualizar e renderiza a pagina
   const atualizando = () => {
      setAtualizar(!atualizar)
   }

   return (
      <div>
         <div>
            {isLoagind && <Imagem src={Gif} alt="loading" />}
            {!isLoagind && <CardUsuario perfil={perfil} />}
            <ChoosePerson atualizando={atualizando} id={perfil.id} />
         </div>
      </div>
   )
}

export default Usuarios