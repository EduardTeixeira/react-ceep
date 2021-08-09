import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    // this.notas = [];
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
  }

  deletarNota(index) {
    console.log(index)
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nomeCategoria) {
    console.log('nome categorias', nomeCategoria)
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    console.log('novoArrayCategorias', novoArrayCategorias)
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    console.log('novoEstado', novoEstado)
    this.setState(novoEstado);
  }

  render() {
    console.log('render')
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
