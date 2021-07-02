import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { IoAttach } from 'react-icons/io5'
import styled from 'styled-components'

const Container = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    text-align: center;
    opacity: 0.7;
    :hover{
      opacity: 1;
    }
`

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
                    return (<Container key={match.id}>
                        <Avatar alt="Remy Sharp" src={match.photo} />
                        <p>{match.name}</p>
                    </Container>
                    )
                })}

            </div>
    )
}