import React from 'react';
import ListaUsuarios from './components/ListaUsuarios';
import CriarUsuario from './components/CriarUsuario';

class App extends React.Component {
  state = {
    paginaExibicao: "cadastro",
  };

  pagina = () => {
    switch (this.state.paginaExibicao) {
      case "cadastro":
        return <CriarUsuario listaUsuarios={this.listaUsuarios} />;
      case "listaUsuario":
        return <ListaUsuarios criarUsuario={this.criarUsuario} />;
      default: return <div>Erro! Página não encontrada :( </div>;
    }
  }

  criarUsuario = () => {
    this.setState({ paginaExibicao: "cadastro" });
  };

  listaUsuarios = () => {
    this.setState({ paginaExibicao: "listaUsuario" });
  };

  render() {
    return (
      <div>
        {this.pagina()}
      </div>
    );
  }
}
export default App;