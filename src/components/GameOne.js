import React from 'react'
import { Link } from 'react-router-dom'
import { displayQuestionImage } from '../actions/randomPicture';
import { displayRandomTwoDogs } from '../actions/randomTwoDogs';
// import { GET_RANDOM_IMAGE } from '../actions/randomPicture'
import {connect} from 'react-redux'
import '../style/GameOne.css'

function GameOne(props) {
  const { random } = props
  // picture is an array » we need a string!
  console.log(random, props)
  const string = random.images.toString()
  // we have to split that string (the url) by '/'...
  // ...and we have to get the breed name which is the 5th...
  // ...so we need [4]
  const breedNamesArray = string.split('/')
  const breedName = breedNamesArray[4]

  console.log('Dog Name',props.dogName)

  // push gives back the lenght of the new array
  // concat gives back the new array with the new element (the array itself)!!!
  const newBreedNamesArray = props.random.breeds.concat(breedName)
  console.log("New breedName",newBreedNamesArray)
  
  // shuffle » (array) => array.sort(() => Math.random() - 0.5);
  const shuffeledBreeds = newBreedNamesArray.sort(() => Math.random() - 0.5)
  console.log('shuffled:', shuffeledBreeds)

  const checkAnswer = (event) => {
    if (event.target.value === breedName) {
      alert('Correct! Click OK to continue the test.')
      props.displayQuestionImage()
      props.displayRandomTwoDogs()
    } else { 
      // show the correct answer after 2 sec delay, and show the next question
      alert(`Wrong, the correct answer is: ${breedName}`)
      setTimeout(() => {
        props.displayQuestionImage()
      props.displayRandomTwoDogs()
      }, 2000)
    }
  }

  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>

      <div className='randomPicture'>
        {!random.images && 'Loading...'}
        {<img src={random.images} alt="Dog" />}
      </div>

      <div className='list'>
        {<select defaultValue='' onChange={checkAnswer}>
          <option value='' key=''>--select a breed name--</option>

          {/* not necessary anymore because we have everything in shuffeledBreeds */}
          {/* <option value={breedName} key='goodAnswer'>{breedName}</option> */}

          {shuffeledBreeds.map(dog => {
            return <option value={dog} key={Math.random()}>{dog}</option>
          })}
        </select>}
      </div>
      
    <Link to="/">Go back to the index</Link>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {displayQuestionImage, displayRandomTwoDogs})(GameOne) 