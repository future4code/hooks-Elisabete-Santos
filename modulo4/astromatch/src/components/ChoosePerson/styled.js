import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  
  button {
    position: relative;
    top: 3px;
    border-radius: 50px;
    padding: 16px;
    margin: 5px;
    cursor: pointer;
    background-color: white;
    //transform: scale(0.7);
    transition: 0.2s;
   
   :focus {
   		outline: none;
   }
  }
  .like {
    border: 1px solid  green;
    color: green;
  
    :hover {
      background-color: green;
      color: white;
      transform: scale(1.1)
    }
  }
  .deslike {
    border: 1px solid  red;
    color: red;
    
    :hover {
      background-color: red;
      color: white;
      transform: scale(1.1)
    }
  }

  @media(max-width:500px){
    margin-top: 10px;
  }
`;