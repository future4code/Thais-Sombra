import React from 'react'
import styled from 'styled-components';

import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Etapa4 from './Components/Etapa4';
import ProximaEtapa from './Components/ProximaEtapa';


const Container = styled.div`
    text-align: center;
`

class App extends React.Component {
  state = {
    etapa:1
  }
  
  next = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    const renderizaTela = () => {
      switch (this.state.etapa){
        case 1:
          return(
            <div>
              <Etapa1/>
              <ProximaEtapa next={this.next} text={'Continuar'}/>
            </div>
          ) 
        case 2:
          return(
            <div>
              <Etapa2/>
              <ProximaEtapa next={this.next} text={'Finalizar'}/>
            </div>
          ) 
        case 3:
          return(
            <div>
              <Etapa3/>
              <ProximaEtapa next={this.next} text={'Finalizar'}/>
            </div>
          ) 
        case 4:
          return(
            <div>
              <Etapa4/>
            </div>
          ) 
        default:
          return  <Etapa4/>
      }
    }
    return (
        <Container>
          {renderizaTela()}
        </Container>
    )
  }
}

export default App;
