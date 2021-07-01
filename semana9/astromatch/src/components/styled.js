import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid lightgrey;
    border-radius: 1%;
    width: 300px;
    height: 500px;
    align-items: center;
    justify-content: space-between;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

export const Span = styled.div`
    color: gray;
    :hover{
        color: darkgray;
    }
`