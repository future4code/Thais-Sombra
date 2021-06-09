import React from 'react'
import styled from 'styled-components'
import './styles.css'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import todoDragon from './img/todoDragon.png'

const TarefaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;

  @media (max-width: 800px){
    flex-direction: column;
    align-items: center;
  };
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
  @media (max-width: 800px){
    width: 90%;
    margin: 10px;
  };
`


const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
  :hover{
    opacity: 0.7;
  }
  `


const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-self: center;
  text-align: center;
  margin: 50px;
  width: 100vw;
  height: 150px;
  
  @media (max-width: 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  };
  `
  const InputsContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    align-items: center;
  
  
    @media (max-width: 800px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 15px;
      width:100%
    };
  `

const Buttons = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  justify-content:space-around;
  align-items: center;

  @media (max-width: 800px){
      width:100%;
  };
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

  @media (max-width: 800px){
    justify-content: center;
  };
`

const LogoImg = styled.img`
  width: 60px;
  margin-right: 15px;
  @media (max-width: 800px){
    width: 100px;
  };
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
          </InputsContainer>

          {/* <InputsContainer>
            <label>Filtro</label>
            <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
            </select>
          </InputsContainer> */}
          <Buttons>
            <button onClick={this.criaTarefa}>Adicionar</button>
            <button onClick={this.limparLista}>Limpar Lista</button>
          </Buttons>
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
