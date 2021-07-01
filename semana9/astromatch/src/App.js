import './App.css';
import React, {useState, useEffect} from 'react';
import { Card } from './components/itens/Card'
import { MatchList } from './components/itens/MatchList';
import { getProfile, getMatches, postChoose, putClear } from './components/api/Requests'

const App = () => {

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
    <div>
      <Card 
        profile={profile}
        loadProfile={loadProfile}
      />
      <button
        onClick={()=>loadProfile()}
      >Atualizar profiles</button>
      <button
        onClick={()=>loadMatches()}
      >Puxar Matches</button>
      <button
        onClick={()=>putClear()}
      > Limpar</button>
      <MatchList 
        matches={matches}
      />
    </div>
  );
}

export default App;
