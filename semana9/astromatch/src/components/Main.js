import React, {useState, useEffect} from 'react';
import { Container, HeaderContainer, Span } from './styled';
import { Card } from './itens/Card'
import { MatchList } from './itens/MatchList';
import { getProfile, getMatches, postChoose, putClear } from './api/Requests'
import { IoChatbubblesSharp } from 'react-icons/io5'
import { BsGearFill } from 'react-icons/bs'

const Main = () => {

  const [ profile, setProfile ] = useState([])
  const [ matches, setMatches ] = useState([])


  const loadProfile = async () => {
    try {
      const newProfile = await getProfile()
      setProfile(newProfile)
    } catch (err){
      console.log(err)
      alert('Erro ao atualizar a lista de perfis, tente novamente mais tarde')
    }
  }

  const loadMatches = async () => {
    try {
      const newMatches = await getMatches()
      setMatches(newMatches)      
    } catch (err){
      console.log(err)
      alert('Erro ao atualizar a lista de matches')
    }
  }

  console.log(matches)

  return (
    <Container>
      <HeaderContainer>
        <Span>
          <BsGearFill />
        </Span>
        <h2>Astromatch</h2>
        <Span>
          <IoChatbubblesSharp 
            onClick={()=>loadMatches()}
          />
        </Span>
      </HeaderContainer>
      <Card 
        profile={profile}
        loadProfile={loadProfile}
      />
      <button
        onClick={()=>loadProfile()}
      >Atualizar profiles</button>
      <button
        onClick={()=>putClear()}
      > Limpar</button>
      <MatchList 
        matches={matches}
      />
    </Container>
  );
}

export default Main;