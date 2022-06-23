import styled from 'styled-components';

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  color: white;
  font-weight: bold;

  h1{
    font-size: 32px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: 10px;

    span{
    color: #FF1493;
    }

  }

  h2{
    font-size: 32px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: -1px;
    margin-bottom: 10px;
  }

  input{
    margin: 10px;
    padding: 5px 10px;
    min-width: 300px;
    border-radius: 8px;
    //box-shadow: 1px 1px 3px 2px #FF1493;
  }

  svg{
      width: 4rem;
      height: 4rem;
      margin-top: -120px;
      color: #FF1493;
      animation: teste 2s ease-in-out normal;
      margin-left: 10px;
   }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 300px;
  margin-top: 15px;
  button{
   padding: 5px 20px;
   border-radius: 8px;
   background-color:#FF1493;
   color:black;
   font-weight: bold;
   font-size: 15px;
   border-color:#FF1493;
   box-shadow: 1px 1px 3px 2px gray;
   
   :hover{
     cursor: pointer;
     background-color: #e2eefa;
     color:#FF1493;
   }
   
  }
  
`