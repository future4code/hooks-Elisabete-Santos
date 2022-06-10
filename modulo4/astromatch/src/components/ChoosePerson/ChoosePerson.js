import React from 'react'
import axios from 'axios';
import { Base_url } from "../../constants/Url"
import { Button } from './styled';
import { ImHeart } from 'react-icons/im';
import { GoX } from 'react-icons/go';

const ChoosePerson = (props) => {

   const onChange = () => {
      props.atualizando();
   }

   const deuMatch = async () => {
      let body = {
         id: props.id,
         choice: true,
      };
      await axios
         .post(`${Base_url}/choose-person`, body)
         .then((res) => {
            props.atualizando();
         })
         .catch((err) => {
            alert(err.response);
         })
   };

   return (
      <Button>
         <button className='deslike' onClick={onChange}>
            <GoX size={28} fontSize='large' />
         </button>
         <button className='like' onClick={deuMatch}>
            <ImHeart size={28} fontSize='large' />
         </button>
      </Button>
   );
}

export default ChoosePerson;