import React from 'react';

export default function PerguntasAbertas(props) {
    return (
      <div>
        <p>{props.pergunta}</p>
        <input onChange={props.onChange} value ={props.value}/>
      </div>
    );
}