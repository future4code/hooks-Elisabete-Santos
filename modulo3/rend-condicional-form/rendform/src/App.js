import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";



let Botao = styled.button`
  text-align: center;
  margin-left: 45vw;
  border: 1px solid #DC143C;
  border-radius: 3px;
  position: relative;
  top: -60px;
  width: 150px;
  height: 35px;
  font-weight: bold;
  background-color: #DC143C;

  &:hover{
     background-color: #CD5C5C;
  }
`;


class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div>
        {this.renderizarEtapa()}
        {this.state.etapa !== 4 && (
          <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao>
        )}
      </div>
    );
  }
}

export default App;

