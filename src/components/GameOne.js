import React from 'react'
import { Link } from 'react-router-dom'
import { displayQuestionImage } from '../actions/randomPicture';
import { displayRandomTwoDogs } from '../actions/randomTwoDogs';
import { connect } from 'react-redux'
import '../style/GameOne.css'

function GameOne(props) {
  const { random } = props
  const string = random.picture.toString()
  const breedNamesArray = string.split('/')
  const breedName = breedNamesArray[4]
  const newBreedNamesArray = props.random.breeds.concat(breedName)
  const shuffeledBreeds = newBreedNamesArray.sort(() => Math.random() - 0.5)

  const checkAnswer = (event) => {
    if (event.target.value === breedName) {
      alert('Correct! Click OK to continue the test.')
      props.displayQuestionImage()
      props.displayRandomTwoDogs()
    } else {
      alert(`Wrong, the correct answer is: ${breedName}`)
      setTimeout(() => {
        props.displayQuestionImage()
        props.displayRandomTwoDogs()
      }, 1000)
    }
  }
  
  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>

      <div className='randomPicture'>
        {!random.picture && 'Loading...'}
        {<img src={random.picture} alt="Dog" />}
      </div>

      <div className='list'>
        {<select defaultValue='' onChange={checkAnswer}>
          <option value='' key=''>--select a breed name--</option>
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

export default connect(mapStateToProps, { displayQuestionImage, displayRandomTwoDogs })(GameOne) 