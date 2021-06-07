import React from 'react'
import styled from 'styled-components';

import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Etapa4 from './Components/Etapa4';


class App extends React.Component {
  state = {
    etapa:4
  }
  render() {
    const renderizaTela = () => {
      switch (this.state.etapa){
        case 1:
          return <Etapa1/>
        case 2:
          return  <Etapa2/>
        case 3:
          return  <Etapa3/>
        case 4:
          return  <Etapa4/>
        default:
          return <div></div>
      }
    }
    return (
      <div>{renderizaTela()}</div>
    )
  }
}

export default App;
