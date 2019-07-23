import React from 'react';
import './App.css';
import Title from './components/Title';
import DogListContainer from './components/DogListContainer';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

function App() {
  return (
    <div className="App">
      <Title name='All Dog Breeds'/>

      <Route exact path="/" component={DogListContainer} />
      {/* <Route path="/dog-breeds/:breed" component={DogBreedImages} /> */}
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
    </div>
  );
}

export default App;
