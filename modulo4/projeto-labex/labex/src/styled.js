import styled from "styled-components";
import espaco from '../src/assets/foto.jpg';

export const MainContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   box-sizing: border-box;
   background-image: url(${espaco});
   background-size: contain;
   background-position: left;
   background-repeat: round;
   background-position-y: top;
   background-blend-mode: color-burn;
   overflow: hidden;
   color: #cccccc;
 
`