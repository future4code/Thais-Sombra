import './App.css';
import React, {useState, useEffect} from 'react';
import { Card } from './components/itens/Card'
import { getProfile, postChoose, putClear, reset } from './components/api/Requests'

const App = () => {

  const [profile, setProfile]=useState('')

  const loadProfile = async () => {
    try {
      const newProfile = await getProfile()
      setProfile(newProfile)
    } catch (err){
      console.log(err)
      alert('Erro ao atualizar a lista de perfis, tente novamente mais tarde')
    }
  }
  console.log(profile)
  
  return (
    <div>
      <Card />
      <button
        onClick={()=>loadProfile()}
      >Atualizar profiles</button>
    </div>
  );
}

export default App;
