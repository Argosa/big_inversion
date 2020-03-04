import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ralph" lastName='Nader' age={70} hairColor='Brown'/>
      <PersonCard firstName="Brian" lastName='Williams' age={55} hairColor='Brown'/>
      <PersonCard firstName="Stan" lastName="Lee" age={85} hairColor='Grey'/>
      <PersonCard firstName="Bill" lastName="Clinton" age={73} hairColor='Grey' />
    </div>
  );
}

export default App;
