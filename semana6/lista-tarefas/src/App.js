import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TarefaList = styled.ul`
  padding: 100px;
  width: 200px;

`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
      {
        id: Date.now(), 
        texto: 'Chorar em posição fetal com react',
        completa: true
      },
      {
        id: Date.now() + 1,
        texto: 'Postar milhões de dúvidas no slack',
        completa: false
      }
    ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {

    const tarefasSalvas = localStorage.getItem('tarefas') 
    const arrayTarefas = JSON.parse(tarefasSalvas)
    if(arrayTarefas) {
      this.setState({tarefas: arrayTarefas})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false
    };

    this.setState({ tarefas: [...this.state.tarefas, novaTarefa] });
  }

  apagaTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({ tarefas: novaListaTarefas });
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const alteraStatus = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return alteraStatus
      } else {
        return tarefa
      } 
    })

    this.setState({ tarefas: novaListaTarefas });
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  limparLista = () => {
    this.setState({tarefas:[]})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    const listaPendente = this.state.tarefas.filter(tarefa => {
      return !tarefa.completa
    })

    const listaFinalizada = this.state.tarefas.filter(tarefa => {
      return tarefa.completa
    })
    
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
            <button onClick={this.limparLista}>Limpar Lista</button>

        <TarefaContainer>
          <TarefaList>
            <h3>Tarefas pendentes</h3>
            {listaPendente.map(tarefa => {
              return (
                <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick = {() => this.apagaTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
              )
            })}
          </TarefaList>

          <TarefaList>
            <h3>Tarefas finalizadas</h3>
            {listaFinalizada.map(tarefa => {
              return (
                <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick = {() => this.apagaTarefa(tarefa.id)}
                >
                {tarefa.texto}
                </Tarefa>
              )
            })}
        
          </TarefaList>
        </TarefaContainer>


      </div>
    )
  }
}

export default App
