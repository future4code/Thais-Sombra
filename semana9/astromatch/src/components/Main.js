import React, {useState, useEffect} from 'react';
import { Container, HeaderContainer, Span, BodyContainer } from './styled';
import { Card } from './itens/Card'
import { MatchList } from './itens/MatchList';
import { Config } from './itens/Config'
import { MessageLimit } from './itens/MessageLimit';
import { getProfile, getMatches, postChoose, putClear } from './api/Requests'
import { IoChatbubblesSharp } from 'react-icons/io5'
import { BsGearFill } from 'react-icons/bs'
import { FiTarget } from 'react-icons/fi'

const Main = () => {

  const [ profile, setProfile ] = useState([])
  const [ matches, setMatches ] = useState([])
  const [ activePage, setActivePage] = useState('config')
  const [reachLimit, setReachLimit] = useState (false)


  const loadProfile = async () => {
    try {
      const newProfile = await getProfile()
      setProfile(newProfile)
    } catch (err){
      console.log(err)
      setReachLimit(true)
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

  useEffect (() => {
    (async () => {
      await loadProfile ();
    })().catch((err)=> {
      console.log(err)
    })
  },[])

  return (
    <Container>
        <HeaderContainer>
          <Span>
            <BsGearFill 
              onClick={()=>setActivePage('config')}
              />
          </Span>
          <h2>Astromatch</h2>
          <Span>
              {activePage==='swipe' ? (
                <IoChatbubblesSharp 
                  onClick={()=>setActivePage('matches')}
                />
                ):(
                <FiTarget 
                  onClick={()=>setActivePage('swipe')}
                />
                )}
          </Span>
        </HeaderContainer>
        <BodyContainer>
          {activePage === 'swipe' ? (
            <Card 
              profile={profile}
              loadProfile={loadProfile}
              putClear={putClear}
            />
          ):( 
            activePage === 'matches' ? (
                <MatchList 
                  matches={matches}
                  loadMatches={loadMatches}
                />
            ):(
                <Config 
                  putClear={putClear}
                />
              )
              )}
        </BodyContainer>

      
    </Container>
  );
}

export default Main;