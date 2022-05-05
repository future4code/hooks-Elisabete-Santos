import React from "react";
import styled from "styled-components";

let Div = styled.div`
   width: 500px;
  text-align: center;
  margin: 0 auto;
  height: 250px;
  background-color: 	#F08080;
  border-radius: 15px;

  h1 {
     padding-top: 50px;
  }

  p{
     font-size: 20px;
     padding: 20px 50px;
  }
`;

class Final extends React.Component {
   render() {
      return (
         <Div>
            <h1>O FORMULÁRIO TERMINOU</h1>
            <p>Obrigado pelo seu tempo! Entraremos em contato!</p>
         </Div>
      );
   }
}

export default Final;