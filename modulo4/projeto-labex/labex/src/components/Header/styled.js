import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: #161625;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 60px;
   z-index: 100;
 

  h1{
    font-size: 35px;
    margin: 12px 25px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
    cursor: pointer;
  }

  span{
    color:#FF1493;
  }
`

export const Buttons = styled.div`
  margin: 50px;
 
`

export const ButtonOne = styled.button`
   margin: 10px 15px ;
   padding: 8px;
   border-radius: 8px;
   background-color: #e2eefa;
   font-weight: bold;
   color:#FF1493;
   font-size: 16px;
   
   :hover{
     cursor: pointer;
     background-color:#FF1493;
     color:black;
   }
`
export const ButtonTwo = styled.button`
   margin: 10px 15px ;
   padding: 8px;
   border-radius: 8px;
   background-color:#C71585;
   color:black;
   font-weight: bold;
   font-size: 16px;
   
   :hover{
     cursor: pointer;
     background-color: #e2eefa;
     color:#FF1493;
   }
`