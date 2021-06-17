import React from "react"
import styled from "styled-components"

const Title1 = styled.h2`
color: white;
`

const Title = (props) =>{
    return (
        <Title1>{props.texto}</Title1>
    )
}

export default Title