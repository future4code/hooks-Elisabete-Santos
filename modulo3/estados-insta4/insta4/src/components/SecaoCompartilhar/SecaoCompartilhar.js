import React, { Component } from "react";
import styled from "styled-components";

const ContainerCompartilhar = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
`

const LinkSocial = styled.a`

`

const ImgSocial = styled.img`
    width: 20px;
`

export class SecaoCompartilhar extends Component {

   render() {
      return (
         <ContainerCompartilhar>

            <LinkSocial href="https://twitter.com/login?lang=pt" target="_Blank">
               <ImgSocial src="https://cdn-icons-png.flaticon.com/512/733/733579.png" />
            </LinkSocial>

            <LinkSocial href="https://pt-br.facebook.com/" target="_Blank">
               <ImgSocial src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png" />
            </LinkSocial>

            <LinkSocial href="https://web.whatsapp.com/" target="_Blank">
               <ImgSocial src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png" />
            </LinkSocial>

         </ContainerCompartilhar>
      )
   }
}