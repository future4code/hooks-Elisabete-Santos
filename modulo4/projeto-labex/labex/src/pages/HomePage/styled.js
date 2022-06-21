import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  color: #fcfcfc;
  text-align: center;
  margin: 40px 30px;

  h1{
    font-size: 38px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
  }

  h2{
    font-size: 35px;
    margin: 12px 25px;
    font-weight: bold;
    color: white; 
  }

  p{
    font-size: 28px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    padding: 0px 70px 0px 70px;
  }

  span{
    color: #FF1493;
  }

  button{
   width: 150px;
   margin-top: 50px;
   //margin: 10px 15px ;
   padding: 8px;
   border-radius: 8px;
   background-color:#FF1493;
   color: black;
   font-weight: bold;
   font-size: 18px;
   border: none;
   margin-left: 580px;
   box-shadow: 1px 1px 3px 2px gray;
   
   :hover{
     cursor: pointer;
     background-color: #e2eefa;
     color:#FF1493;
     border: none;
   }
   
  }
  
   svg{
      width: 5rem;
      height: 5rem;
      margin-top: 10px;
      color: #FF1493;
      animation: teste 2s ease-in-out normal;
      margin-left: 630px;
   }
`
