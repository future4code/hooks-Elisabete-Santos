import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 28.125rem;
  width: 21.875rem;
  box-shadow: 5px 5px 10px #808080;
  border-radius: 10px;
  overflow: hidden;
  top: 16px;
  left: -3px;
  
  img {
    width: 100%;
    z-index: 1;
    height: 28.125rem;
    width: 21.875rem;
  }
  div {
    height: 20%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: grey;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.938rem;
    z-index: 2;
    span {
      display: flex;
      align-content: center;
      margin: 0px 20px;
      h2 {
        font-size: 23px;
      }
    }
    p {
      margin: 2px 20px;
      font-weight: 600;
    }
  }

  @media(max-width:500px){
    height: 40rem;
    width: 21.875rem;
    top: -10px;

    img {
      position: relative;
      top: -85px;
      height: 31rem;
    }

    div {
      height: 20%;
      width: 100%;
      position: absolute;
      bottom: 0;
      background-color: grey;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0.938rem;
      //z-index: 2;
      top: 482px;
      span {
        display: flex;
        align-content: center;
        margin: 0px 20px;
        h2 {
          font-size: 23px;
        }
      }
      p {
        margin: 2px 20px;
      }
    }
  }
`;