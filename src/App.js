
import './App.css';
import Contact from './components/Contact/Contact';
import Fonds from './components/Fonds/Fonds';
import {BrowserRouter, Switch, Route }from 'react-router-dom'
import Realisations from './components/Realisations/Realisations'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Realisations/>
      <Fonds/>
      <Contact/>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
