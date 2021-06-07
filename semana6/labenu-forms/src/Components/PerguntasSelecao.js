import React from 'react';

export default function PerguntasSelecao (props) {
    return (
        <div>
            <p>{props.pergunta}</p>
            <select>{props.opcoes.map((opcao) => (
                <option value={opcao}>{opcao}</option>
            ))}    
            </select>
        </div>
    )
}