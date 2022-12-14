import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 16px 5vw;
  background-color: #0d253f;
  color: white;

  :hover{
    cursor: pointer;
  }

  img {
    margin-top: 8px;
    width: 200px;
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    justify-content: center;
  }
`