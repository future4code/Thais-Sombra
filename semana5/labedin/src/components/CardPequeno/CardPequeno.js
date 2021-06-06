import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`
const ContainerImg = styled.img`
    width: 10px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerTitle = styled.h4`
    margin-bottom: 0px;
`

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <Container>
            <ContainerImg src={ props.imagem }></ContainerImg>
            <ContainerDiv>
                <ContainerTitle>{ props.descricao }</ContainerTitle>
            </ContainerDiv>
        </Container>
    )
}

export default CardPequeno;