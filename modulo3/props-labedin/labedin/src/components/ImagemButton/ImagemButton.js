import React from 'react';
import { ImagemButtonContainer } from '..//styled'

function ImagemButton(props) {
    return (
        <ImagemButtonContainer>
            <img src={props.imagem} />
            <p>{props.texto}</p>
        </ImagemButtonContainer>

    )
}

export default ImagemButton;