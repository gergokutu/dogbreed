import React from 'react';
import './App.css';
import Title from './components/Title';
import DogListContainer from './components/DogListContainer';



function App() {
  return (
    <div className="App">
      <Title name='All Dog Breeds'/>
      <DogListContainer />
    </div>
  );
}

export default App;
