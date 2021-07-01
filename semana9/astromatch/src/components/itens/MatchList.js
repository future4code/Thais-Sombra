import React from 'react'
import styled from 'styled-components'

export const MatchList = (props) =>{

    return (<div>
                {props.matches.map (match => {
                    return (
                        <p key={match.id}>{match.name}</p>
                    )
                })}
            </div>
    )
}