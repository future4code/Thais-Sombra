import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
