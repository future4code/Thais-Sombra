import React from "react"
import styled from "styled-components"

const Audio = styled.audio`
    align-self: end;
    width:100%;
`

const RenderMusic = (props) =>{
    return (<>
                <p>{props.tracks.name}</p>
                <p>{props.tracks.artist}</p>
                <Audio controls='controls'>
                    <source src={props.tracks.url} />
                </Audio>
            </>
    )
}

export default RenderMusic 