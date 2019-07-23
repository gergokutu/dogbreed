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
<<<<<<< HEAD
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />  
=======
      {/* <Route path="/dog-breeds/:breed" component={DogBreedImages} /> */}
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
>>>>>>> f37a9d69c537a3bb06b157e14ab562afd8d62d2e
    </div>
  );
}

export default App;
