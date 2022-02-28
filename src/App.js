
import './App.css';
import Contact from './components/Contact/Contact';
import Fonds from './components/Fonds/Fonds';
import {BrowserRouter, Switch, Route }from 'react-router-dom'
import Realisations from './components/Realisations/Realisations'
import Responsabilities from './components/Responsabilites/Responsabilities';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Fonds/>
      <Contact/>
      <Responsabilities/>
      {/* <Realisations/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
