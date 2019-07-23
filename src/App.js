import React from 'react';
import './App.css';
import Title from './components/Title';
import DogListContainer from './components/DogListContainer';
import { Route } from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Title name='All Dog Breeds'/>
      <Button />
      <Route exact path="/" component={DogListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />

    </div>
  );
}

export default App;
