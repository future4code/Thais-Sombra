import React from "react"
import styled from "styled-components"
import IconButton from "./IconButton"
import { IoCloseCircle } from "react-icons/io5"

const Container = styled.div`
    width: 70%;
    height:800px;
    background-color:lightgrey;
    text-align: left;
`

const TrackDiv = styled.div`
    background-color: lightgrey;
    margin: 5px;
    display: flex;
    width: 90%auto;
    flex-direction: row;
    justify-content: space-around;

`

export default class Playlist extends React.Component {
    render(){
        const tracks = this.props.playlistTracks.map((tracks) => {
            return (<>
                      <TrackDiv key={tracks.id}>  
                      <p>{tracks.name}</p>
                      <p>{tracks.artist}</p>
                      <IconButton
                        onClick={()=>this.props.deletePlaylist(tracks.id)}
                        icone={<IoCloseCircle/>}
                      />
                      </TrackDiv>
                      <hr/>
                    </>
            )
          })

        return (
            
            <Container>
                <h1>{this.props.playlistChosen}</h1>
                {tracks}
            </Container>
                
        )
    }
}

