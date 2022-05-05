import React from "react";
import styled from "styled-components";

let Div = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  height: 370px;
  background-color: 	#F08080;
  border-radius: 15px;
  font-weight: 600;

  h1 {
     padding-top: 30px;
  }

  input{
   width: 50%;
   height: 20px;
   border-radius: 4px;
  }

`;

class Etapa2 extends React.Component {
   render() {
      return (
         <Div>
            <h1>ETAPA 2 - SOBRE O ENSINO SUPERIOR</h1>
            <p>5. Qual curso?</p>
            <input type="text" name="curso" />
            <p>6. Qual a instituição de ensino?</p>
            <input type="text" name="instituicao" />
         </Div>
      );
   }
}

export default Etapa2;