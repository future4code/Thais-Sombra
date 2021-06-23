import './App.css';
import React from 'react';
import { CgPokemon } from 'react-icons/cg'
import { SiPokemon } from 'react-icons/si'
import axios from 'axios'
import styled from 'styled-components';

const url = 'https://pokeapi.co/api/v2/'

const PkmGridCards = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`

const PkmCard = styled.div`
  background-color:lightblue;
`

export default class App extends React.Component {

  state = {
    pkmList: [],
    pkmNumMin: 0,
    pkmNumMax: 9,
    picture: '',    
  }

  componentDidMount () {
    this.getPkms()
  }

  getPkms = async () => {
    const response = await axios.get(`${url}pokemon?limit=${this.state.pkmNumMax}&offset=${this.state.pkmNumMin}`)
    this.setState({pkmList: response.data.results})
  }

  getPkmPicture = async (url) => {
    const response = await axios.get(url)
    return <img src={response.data.sprites.front_default}></img>
  }

  CarregarMais = () => {
    this.setState({
      pkmNumMax: this.state.pkmNumMax + 9
    })
    this.getPkms()
  }
  
  
  render (){

    const pokeList = this.state.pkmList.map((pkm)=>{
      return (<>
                <PkmCard key={pkm.name}>
                  {pkm.name}
                  {()=>{this.getPkmPicture(pkm.url)}}
                </PkmCard>
              </>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <CgPokemon className="App-logo" alt="logo" />
          <h1>
            <SiPokemon />
          </h1>
        </header>
        <main>
      <button onClick={this.CarregarMais}>Carregar mais</button>
      <PkmGridCards>
        {pokeList}
      </PkmGridCards>
        </main>
      </div>
    );
  }
}

