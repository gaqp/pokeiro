import React, { Component } from 'react';
import logo from './pokedolar.png';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.getPokemon = this.getPokemon.bind(this);
    this.getEuro = this.getEuro.bind(this);

    this.state = {
      pokemon: {
        nome: "Missigno",
        foto: "https://vignette.wikia.nocookie.net/anicrossbr/images/d/d3/Missingno.jpg/revision/latest/scale-to-width-down/180?cb=20180902002439&path-prefix=pt-br",
        id: 0
      },
      euro: {
        compra: 0,
        venda: 0
      }
    }
  }


  async getEuro() {
    await axios.create({
      baseURL: "https://economia.awesomeapi.com.br/all/EUR-BRL"
    }).get('/').then((response) => {
      console.log(response)
      this.setState({
        euro: {
          compra: response.data.EUR.ask,
          venda: response.data.EUR.bid
        }
      })
      this.getPokemon(Math.trunc((this.state.euro.compra*100)))
    }
    );
  }

  async getPokemon(pokeNum) {
    await axios.create({
      baseURL: `https://pokeapi.co/api/v2/pokemon/${pokeNum}`,
    }).get("/").then((response) => {
      console.log(response)
      this.setState({
        pokemon: {
          nome: response.data.name,
          foto: response.data.sprites.front_default,

        }
      })
    });
  }
  async componentWillMount() {
    await this.getEuro();
  }
  render() {

    return (
      <div className="App">
        <header className="pokeEuro-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="pokeEuro-body">
          <div className="pokeEuro-card">
            <img src={this.state.pokemon.foto} alt="Fotinha do pokemão" />
            <br/>
            {this.state.pokemon.nome}
            <br />
            Cotação de venda: <b>R$ {this.state.euro.compra}</b>
            <br />
            Cotação de compra: <b>R$ {this.state.euro.venda}</b>
            <br />
          </div>
        </div>
      </div >
    );

  }
}

export default App;
