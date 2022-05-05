import React from "react";
import styled from "styled-components";

let Div = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  height: 380px;
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

  select{
   width: 50%;
   height: 22px;
   border-radius: 4px; 
  }

`;

class Etapa3 extends React.Component {
   render() {
      return (
         < Div >
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input type="text" />
            <p>6. Você fez algum curso complementar?</p>
            <select value="">
               <option value="nenhum">Nenhum
               </option>
               <option value="curso técnico">Curso técnico
               </option>
               <option value="Inglês">Inglês
               </option>
            </select>
         </Div >
      );
   }
}

export default Etapa3;