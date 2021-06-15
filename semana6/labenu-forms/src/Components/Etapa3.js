import React from 'react';
import PerguntasAbertas from './PerguntasAbertas';
import PerguntasSelecao from './PerguntasSelecao';

export default class Etapa3 extends React.Component {
    render(){
        return (
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <PerguntasAbertas pergunta={'5. Por que você não terminou um curso de graduação?'}/>
                <PerguntasSelecao 
                pergunta={'6. Você fez algum curso complementar?'}
                opcoes={[
                    "Nenhum",
                    "Curso técnico",
                    "Curso de Inglês"
                ]}
                />
            </div>
        )
    }
}