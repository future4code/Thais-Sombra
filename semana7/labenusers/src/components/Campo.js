import React from "react"
import styled from "styled-components"
import Input from './Input'
import Icone from './Icone'

const Campo1 = styled.div`
    display:flex;
    background-color: white;
    color:black;
    border-radius: 5px;
    height: 50px;
    width: 300px;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
`

const Campo = (props) =>{
    return (
        <Campo1>
            <Icone
                icone = {props.icone}
            />  
            <Input 
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
            />
        </Campo1>
    )
}

export default Campo