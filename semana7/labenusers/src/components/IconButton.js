import React from "react"
import styled from "styled-components"

const Icones = styled.span`
  color: darkgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  };
  &:nth-child(1){
    color: red;
  };
  &:nth-child(2){
    color: darkblue;
  };
  &:nth-child(3){
    color: darkmagenta;
  }
`

const IconButton = (props) =>{
    return (
        
        <Icones onClick={props.onClick}>{props.icone}</Icones>

            
    )
}

export default IconButton