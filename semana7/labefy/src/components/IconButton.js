import React from "react"
import styled from "styled-components"

const Icones = styled.span`
  color: darkgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(255,255,255,0.6);
  font-size: 30px;
  cursor:pointer;
  &:hover{
    color: rgba(255,255,255,1);
  };
`

const IconButton = (props) =>{
    return (
        
        <Icones onClick={props.onClick}>{props.icone}</Icones>            
    )
}

export default IconButton