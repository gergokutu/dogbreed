import React from 'react'
import { Link } from 'react-router-dom'
import { displayQuestionImage } from '../actions/randomPicture'
import { displayRandomTwoDogs } from '../actions/randomTwoDogs'
import { connect } from 'react-redux'
import '../style/GameOne.css'
import { sendGoodAnswer1 } from '../actions/sendGoodAnswer1'
import { sendWrongAnswer1 } from '../actions/sendWrongAnswer1'

function GameOne(props) {
  const { random, dogBreeds } = props
  const string = random.picture.toString()
  const breedNamesArray = string.split('/')
  const breedName = breedNamesArray[4]
  const cleanBreeds = dogBreeds.filter(breed => breed !== breedName)
  const shuffeledCleanBreeds = cleanBreeds.sort(() => Math.random() - 0.5)
  const randomTwoDogs = shuffeledCleanBreeds.slice(0, 2)
  const breedOfTHree = randomTwoDogs.concat(breedName)
  console.log('selected:', breedOfTHree)
  const randomBreeds = breedOfTHree.sort(() => Math.random() - 0.5)

  const checkAnswer = (event) => {
    if (event.target.value === breedName) {
      props.sendGoodAnswer1(event.target.value)
      alert('Correct! Click OK to continue the test.')
      props.displayQuestionImage()
      props.displayRandomTwoDogs()
    } else {
      props.sendWrongAnswer1(event.target.value)
      alert(`Wrong, the correct answer is: ${breedName}`)
      setTimeout(() => {
        props.displayQuestionImage()
        props.displayRandomTwoDogs()
      }, 1000)
    }
  }
  
  const sucessRate = Math.floor(random.goodAnswers1.length/(random.goodAnswers1.length+random.wrongAnswers1.length)*100)

  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <Link to="/">Go back to the Homepage</Link>
      <p>Please choose the correct answer</p>

      <div className='randomPicture'>
        {!random.picture && 'Loading...'}
        {<img src={random.picture} alt="Dog" />}
      </div>

      <div className='sucessRate'>  
        Your success rate is: {!sucessRate ?  '0' : sucessRate}%
      </div>

      <div className='list'>
        {<select defaultValue='' onChange={checkAnswer}>
          <option value='' key=''>--select a breed name--</option>
          {randomBreeds.map(dog => {
            return <option value={dog} key={Math.random()}>{dog}</option>
          })}
        </select>}
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { displayQuestionImage, displayRandomTwoDogs, sendGoodAnswer1, sendWrongAnswer1 })(GameOne) 