import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1%;
    width: 300px;
    height: 500px;
    align-items: center;
    justify-content: space-between;
`

export const ProfilePhoto = styled.img`
    width: 100%;
    height: 300px;
`

export const Span = styled.span`
    display: flex;
    flex-direction: row;
    font-size: 50px;
    cursor: pointer;
    width: 100%;
    height: 80px;
    justify-content: space-around;
    #dislike{
        color: red;
        width: 70px;
        height: 70px;
        border: 2px solid lightgrey;
        border-radius: 50%;
        padding: 10px;
    }
    #like{
        color: green;
        border: 2px solid lightgrey;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        padding: 13px;
    }
`
