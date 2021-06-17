import React from "react"
import styled from "styled-components"
import Input from "./Input"
import IconButton from "./IconButton"

const Search1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 50px;
        input{
            width: 500px;
        };
`
const Container = styled.div`
    display: flex;
    flex-direction:row;
    background-color:  white;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
`

const Search = (props) =>{
    return (
        <Search1>
            <Container>
                <Input 
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                /> 
                <IconButton 
                    icone={props.icone}
                    onClick={props.onClick}
                />
            </Container>
        </Search1>
    )
}

export default Search