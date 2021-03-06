import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Perfil from './components/foto-perfil.jpeg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil} 
          nome="Thaís Matoso Sombra" 
          descricao="Olá, Eu sou a Thaís, uma estudante de web full stack apaixonada por tecnologia, meu sonho é automatizar tudo!!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container" > 
        <CardPequeno
          imagem=""
          descricao="Email: thais.sombra@hotmail.com"
        />

        <CardPequeno
          imagem=""
          descricao="Endereço: Rua dos bobos, número 0"
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Attend Ambiental" 
          descricao="Responsável pela liderança do time operacional de tratamento de efluentes industriais" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Digimed" 
          descricao="Engenheira de aplicação responsável pelo segmento de Papel e Celulose. Atendimento técnico e comercial." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
