import React from 'react';
import { CardGrandeContainer } from '..//styled'

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <img src={props.imagem} />
            <div>
                <h4>{props.nome}</h4>
                <h8>{props.data}</h8>
                <p>{props.descricao}</p>
            </div>
        </CardGrandeContainer>
    )
}

export default CardGrande;