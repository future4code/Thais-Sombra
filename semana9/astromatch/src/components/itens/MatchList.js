import React, { useEffect } from 'react'
import styled from 'styled-components'

export const MatchList = (props) =>{

    useEffect (() => {
        (async () => {
          await props.loadMatches();
        })().catch((err)=> {
          console.log(err)
        })
      },[])

    return (<div>
                {props.matches.map (match => {
                    return (
                        <p key={match.id}>{match.name}</p>
                    )
                })}

            </div>
    )
}