import React from 'react';

import PerguntasAbertas from './PerguntasAbertas';
import PerguntasSelecao from './PerguntasSelecao';

export default class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <h3>Etapa1 : Dados gerais</h3>
                <PerguntasAbertas pergunta={"1.Qual o seu nome?"}/>
                <PerguntasAbertas pergunta={"2.Qual a sua idade?"}/>
                <PerguntasAbertas pergunta={"3.Qual o seu e-mail?"}/>
                <PerguntasSelecao pergunta={"4. Qual a sua escolaridade?"}
                opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
                />
            </div>
        )
    }
}