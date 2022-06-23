import styled from "styled-components";
import espaco from '../src/assets/astronaut.jpg';

export const MainContainer = styled.div`
     display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   margin: 0;
   //opacity: 0.9;
   box-sizing: border-box;
   background-image: url(${espaco});
   background-repeat: round;
   background-size: center;
   /* background-position: unset;
   background-repeat: no-repeat; */
   /* background-position-y: top;
   background-blend-mode: color-burn; */
   overflow: hidden;
   color: #cccccc;
 
`