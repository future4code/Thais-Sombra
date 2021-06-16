import React from "react"
import styled from "styled-components"

const Button1 = styled.button`
    background-color: white;
    color: black;
    text-transform: uppercase;
    outline: none;
    border:none;
    padding: .78rem 1.5rem;
    font-weight:700;
    text-align: center;
    margin: 30px;
    border-radius: 5px;
    cursor: pointer;
`

const Button = (props) =>{
    return (
       <Button1 onClick={()=>props.onClick()}>{props.value}</Button1>
    )
}

export default Button;