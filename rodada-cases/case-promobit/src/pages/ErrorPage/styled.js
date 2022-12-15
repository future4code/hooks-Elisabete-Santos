import styled from "styled-components";

export const ErrorPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #28608d;
`

export const ErrorImage = styled.img`
   width: 100vw;
   max-width: 900px;
   margin-top: -60px;
`

export const VoltarHome = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-left: 60px;

  @media(max-width:480px){
      display: grid; 
      font-size: 15px;
      margin-left: 20px;
   }
`
