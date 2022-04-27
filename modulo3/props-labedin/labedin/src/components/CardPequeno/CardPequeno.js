import React from 'react';
import { CardPequenoContainer } from '..//styled'

function CardPequeno(props) {
   return (
      <CardPequenoContainer>
         <img src={props.imagem} />
         <div>
            <h4>{props.email}</h4>
            <p>{props.endereco}</p>
         </div>
      </CardPequenoContainer>
   )
}

export default CardPequeno;