import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid lightgrey;
    border-radius: 1%;
    width: 300px;
    height: 550px;
    align-items: center;
    padding: 10px;
    //justify-content: space-between;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    width: 100%;
    position: top;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

export const Span = styled.div`
    color: gray;
    :hover{
        color: darkgray;
        cursor: pointer;
    }
`

export const BodyContainer = styled.div`
    //background-color: lightcoral;
`