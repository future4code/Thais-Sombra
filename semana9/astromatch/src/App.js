import './App.css';
import React, {useState, useEffect} from 'react';
import { Card } from './components/itens/Card'
import { getProfile, getMatches, postChoose, putClear, reset } from './components/api/Requests'

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
    </div>
  );
}

export default App;
