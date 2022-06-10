import styled from "styled-components";

export const ListaMatches = styled.div`
  display: flex;
  flex-direction: column;

  li{
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: #8B008B;
    font-weight: bold
  }
  
  img{
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 20px;
  }
`

export const Button = styled.div`
display: flex;
justify-content: flex-end;
margin: 10px 0;

button{
  padding: 5px;
  border-radius: 5px;
  background-color: #20B2AA;
  font-weight: bold;
  border: none;
  height: 35px;
  width: 140px;

  :hover{
    cursor: pointer;
    background-color: #8B008B;
    color: #fff;
  }
}
`