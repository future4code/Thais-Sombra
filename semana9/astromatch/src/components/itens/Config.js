import React from 'react'

export const Config = (props) =>{

  

    return (<div>
               <h2>Config</h2>
               <button
                onClick={()=>props.putClear()}
                > Limpar</button>
            </div>
    )
}