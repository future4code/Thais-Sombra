import React from 'react'
import styled from 'styled-components'
import './styles.css'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import todoDragon from './img/todoDragon.png'

const TarefaContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100vw;
`

const TarefaListContainer = styled.div`
  display: flex;
  background-color: lightblue;
  justify-content: space-between;
  align-items: left;
  display:flex;
  flex-direction: row;
  margin: 5px;
  padding: 15px;
  width: 100%;
  background-color: ${({completa}) => (completa ? 'lightgreen' : 'lightred')};
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(255,118,20,1)0%,
    rgba(255,84,17,1)100%
  );
`

const TarefaList = styled.ul`
  padding: 50px;
  width: 50%;
  list-style: none;
  background-color: rgb(255, 255, 255, 0.1);
  margin: 50px;
  justify-content: center;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  `

const InputsContainer = styled.div`
  display: flex;
  gap: 10px;
  `

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin: 50px;
  width: 100vw;
  `

const Icons = styled.div`
  cursor:pointer;
  justify-content: space-between;
  `

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 100vw;
  height: 100px;
  background-color: rgb(255, 255, 255, 0.1);
`

const LogoImg= styled.img`
  width: 60px;
  margin-right: 15px;
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
    this.setState({ inputValue: ''})
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

  atualizaTarefa = () => {

  }

  render() {
  /*   const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    }) */

    const listaPendente = this.state.tarefas.filter(tarefa => {
      return !tarefa.completa
    })

    const listaFinalizada = this.state.tarefas.filter(tarefa => {
      return tarefa.completa
    })
    
    return (
      <div className="App">
        <Logo>
          <LogoImg src={todoDragon}></LogoImg>
         <h1>Lista de tarefas</h1>
        </Logo>
        <Header>
          <InputsContainer>
            <input placeholder={"Tarefa"} value={this.state.inputValue} onChange={this.onChangeInput}/>
            <button onClick={this.criaTarefa}>Adicionar</button>
          </InputsContainer>

          <InputsContainer>
            <label>Filtro</label>
            <select value={this.state.filter} onChange={this.onChangeFilter}>
              <option value="">Nenhum</option>
              <option value="pendentes">Pendentes</option>
              <option value="completas">Completas</option>
            </select>
          </InputsContainer>
          
            <button onClick={this.limparLista}>Limpar Lista</button>
        </Header>

        <TarefaContainer>
          <TarefaList>
            <h3>Tarefas pendentes</h3>
            {listaPendente.map(tarefa => {
              return (
                <TarefaListContainer className="TarefaListContainer">
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => this.selectTarefa(tarefa.id)}
                    >
                      {tarefa.texto}
                  </Tarefa>
                  <Icons>
                    <RiCloseCircleLine  onClick = {() => this.apagaTarefa(tarefa.id)}/>
                    <TiEdit />
                  </Icons>
              </TarefaListContainer>
              )
            })}
          </TarefaList>

          <TarefaList>
            <h3>Tarefas finalizadas</h3>
            {listaFinalizada.map(tarefa => {
              return (
                <TarefaListContainer>
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => this.selectTarefa(tarefa.id)}
                    >
                      {tarefa.texto}
                  </Tarefa>
                  <Icons>
                    <RiCloseCircleLine onClick = {() => this.apagaTarefa(tarefa.id)}/>
                    <TiEdit />
                  </Icons>
              </TarefaListContainer>
              )
            })}
        
          </TarefaList>
        </TarefaContainer>


      </div>
    )
  }
}

export default App
