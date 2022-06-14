import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  p{
    font-size: 25px;
    font-weight: bold;
  }
  button {
    border: none;
    background-color: white;
    color: #8B008B;
    transition: 0.2s;
    
    :hover{
      transform: scale(1.2);
    }

  }

  @media(max-width:500px){
    button{
      position: relative;
      top: -45px;
    }
  }
`;

export const Logo = styled.img`
	height: 5%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
  
  @media(max-width:500px){
    top: 12px;
  }

`

