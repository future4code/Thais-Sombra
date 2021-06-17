import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background-color: lightgrey;
    height: 100px;
    width:200px;
`

const PkmCard =(props) => {
    return (
        <Card>
            <p>{props}</p>
        </Card>
    )

}

export default PkmCard