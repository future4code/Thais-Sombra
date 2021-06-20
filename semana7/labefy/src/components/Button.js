import React from "react"
import styled from "styled-components"

const Button1 = styled.button`
  color: rgba(0,0,0);
  background-color:white;
  opacity: 0.8;
  border-radius:5px;
  padding: 5px;
  width: 100px;
  height: 30px;
  cursor:pointer;
  &:hover{
      opacity:1;
  };
`

const Button = (props) =>{
    return (
        
        <Button1 onClick={props.onClick}>{props.texto}</Button1>            
    )
}

export default Button