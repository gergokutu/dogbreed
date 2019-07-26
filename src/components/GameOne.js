import React from 'react'
import { Link } from 'react-router-dom'
import { displayQuestionImage } from '../actions/randomPicture'
import { displayRandomTwoDogs } from '../actions/randomTwoDogs'
import { connect } from 'react-redux'
import '../style/GameOne.css'
import { sendGoodsAnswer } from '../actions/sendGoodAnswers'
import { sendWrongAnswer } from '../actions/sendWrongAnswer'

function GameOne(props) {
  const { random } = props
  const string = random.picture.toString()
  const breedNamesArray = string.split('/')
  const breedName = breedNamesArray[4]
  const newBreedNamesArray = props.random.breeds.concat(breedName)
  const shuffeledBreeds = newBreedNamesArray.sort(() => Math.random() - 0.5)

  const checkAnswer = (event) => {
    if (event.target.value === breedName) {
      props.sendGoodsAnswer(event.target.value)
      
      alert('Correct! Click OK to continue the test.')
      props.displayQuestionImage()
      props.displayRandomTwoDogs()
    } else {
      props.sendWrongAnswer(event.target.value)

      alert(`Wrong, the correct answer is: ${breedName}`)
      setTimeout(() => {
        props.displayQuestionImage()
        props.displayRandomTwoDogs()
      }, 1000)
    }
  }
  
  const sucessRate = Math.floor(random.goodAnswers.length/(random.goodAnswers.length+random.wrongAnswers.length)*100)

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
          {shuffeledBreeds.map(dog => {
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

export default connect(mapStateToProps, { displayQuestionImage, displayRandomTwoDogs, sendGoodsAnswer, sendWrongAnswer })(GameOne) 