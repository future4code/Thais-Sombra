import React from "react"
import styled from "styled-components"

const Icones = styled.i`
    margin: 15px;
    color: darkgray;
`

const Icone = (props) =>{
    return (
        
        <Icones>{props.icone}</Icones>
            
    )
}

export default Icone