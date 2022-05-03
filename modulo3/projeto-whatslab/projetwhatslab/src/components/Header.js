import React from "react";
import styled from "styled-components";

import iconChatLogo from "../img/whatsapp.png";


const Header = styled.div`
  background-color: #3d3f3f;
  color: antiquewhite;
  display: grid;
  grid-template-columns: 56px 110px 1fr 56px;
  align-items: center;
  padding-left: 10px;
  box-shadow: 1px 1px 10px #a39d9d34;
  border-radius: 3px 3px 1px 1px;

  h2 {
    font-family: "Helvetica Neue",Helvetica,Arial;
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
`;

export default function HeaderComponent(props) {
  return (
    <Header>
      <img src={iconChatLogo} alt="icone" />
      <h2>Whatslab</h2>
    </Header>
  );
}
