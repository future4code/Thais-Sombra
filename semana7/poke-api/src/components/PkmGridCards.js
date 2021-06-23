import React from 'react'
import styled from 'styled-components'
import PkmCard from './PkmCard'

const Grid = styled.div`
    display:grid;
`

const PkmGridCards =(props) => {
    return (
        <Grid>
            <PkmCard/>
        </Grid>
    )

}

export default PkmGridCards