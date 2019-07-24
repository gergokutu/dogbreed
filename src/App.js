import React from 'react';
import './App.css';
import Title from './components/Title';
import DogListContainer from './components/DogListContainer';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import GameOneContainer from './components/GameOneContainer'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Title name='All Dog Breeds'/>
      <Button />
      <Route exact path="/" component={DogListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      <Route path="/GameOne" component={GameOneContainer} />
      

    </div>
  );
}

export default App;
