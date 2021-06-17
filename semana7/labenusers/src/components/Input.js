import React from "react"
import styled from "styled-components"


const Input1 = styled.input`
    border:none;
    width:100%;
    padding-left: 0px;
    font-size: 1.2rem;
    border-style: none;
`


const Input = (props) =>{
    return (
       <Input1 
            type="text" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        /> 
    )
}

export default Input