
import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] };
        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        console.log('Render ListaDeCategorias.jsx');
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.categorias.map((categoria, index) => {
                        return (
                            <li key={index} className="lista-categorias_item">
                                {categoria}
                            </li>
                        );
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }

}

export default ListaDeCategorias;