import React from 'react';

import PerguntasAbertas from './PerguntasAbertas';
import PerguntasSelecao from './PerguntasSelecao';

export default class Etapa1 extends React.Component {
    state = {
        nome:'',
        idade:'',
        email:'',
        escolaridade:''
    }

    onChangeInputNome = (event) => {
        this.setState({
            nome: event.target.value
        })
    }

    onChangeInputIdade = (event) => {
        this.setState({
            idade: event.target.value
        })
        console.log(this.state.idade)

    }

    onChangeInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onChangeSelectEscolaridade = (event) => {
        this.setState({
            escolaridade: event.target.value
        })
        console.log(this.state.escolaridade)
        console.log(event.target.value)
    }

    
    render(){
        console.log(this.state)
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <PerguntasAbertas 
                    onChange={this.onChangeInputNome} 
                    pergunta={"1. Qual o seu nome?"}
                />
                <PerguntasAbertas 
                    onChange={this.onChangeInputIdade} 
                    pergunta={"2. Qual a sua idade?"}
                />
                <PerguntasAbertas 
                    onChange={this.onChangeInputEmail} 
                    pergunta={"3. Qual o seu e-mail?"}
                />
                <PerguntasSelecao 
                    onChange={this.onChangeSelectEscolaridade} 
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={
                        [
                            "Ensino médio incompleto",
                            "Ensino médio completo",
                            "Ensino superior incompleto",
                            "Ensino superior completo"
                        ]
                    }
                />
            </div>
        )
    }
}