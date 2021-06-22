import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"

const ButtonContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 20px 50px;
  align-items: center;
  p{
    margin-left: 10px;
  }
`

const ButtonContainer = (props) =>{
    return (
        <ButtonContainer1>
            <IconButton
                onClick={props.onClick}
                icone={props.icone}
            /> 
            <p>{props.texto}</p>
      </ButtonContainer1>
    )
}

export default ButtonContainer