import React from 'react';

export default function PerguntasSelecao (props) {
    return (
        <div>
            <p>{props.pergunta}</p>
            <select onChange={props.onChange}>
                {props.opcoes.map((opcao, index) => (
                <option 
                    key={index} 
                    value={opcao}
                    >
                    {opcao}
                </option>
                ))
                } 
            </select>
        </div>
    )
}