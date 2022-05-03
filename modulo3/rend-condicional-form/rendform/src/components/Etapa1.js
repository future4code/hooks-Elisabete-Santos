import React from "react";
import styled from "styled-components";

let Div = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  height: 500px;
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

class Etapa1 extends React.Component {
   render() {
      return (
         <Div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <p>1. Qual o seu nome completo?</p>
            <input type="text" />
            <p>2. Qual a sua idade?</p>
            <input type="text" />
            <p>3. Qual o seu e-mail?</p>
            <input type="text" />
            <p>4. Qual a sua escolaridade?</p>
            <select name="select">
               <option>Ensino médio incompleto</option>
               <option>Ensino médio completo</option>
               <option>Ensino superior incompleto</option>
               <option>Ensino superior completo</option>
            </select>
         </Div>
      );
   }
}

export default Etapa1;
