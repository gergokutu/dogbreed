import React from 'react'
import { Link } from 'react-router-dom'
import { displayQuestionImage } from '../actions/randomPicture';
import { displayRandomTwoDogs } from '../actions/randomTwoDogs';
// import { GET_RANDOM_IMAGE } from '../actions/randomPicture'
import {connect} from 'react-redux'

function GameOne(props) {
  const { picture } = props
  // picture is an array » we need a string!
  const string = picture.toString()
  // we have to split that string (the url) by '/'...
  // ...and we have to get the breed name which is the 5th...
  // ...so we need [4]
  const breedName = string.split('/')[4]

  const checkAnswer = (event) => {
    if (event.target.value === breedName) {
      console.log(props)
      props.displayQuestionImage()
      props.displayRandomTwoDogs()
    } else {
      alert('You are fucked up')
    }
  }

  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>

      <div className='randomPicture'>
        {!picture && 'Loading...'}
        {<img src={picture} alt="Dog" />}
      </div>

      <div className='list'>
        {<select defaultValue='' onChange={checkAnswer}>
          <option value='' key=''>--select a breed name--</option>

          <option value={breedName} key='goodAnswer'>{breedName}</option>

          {props.dogName.map(dog => {
            return <option value={dog} key={dog}>{dog}</option>
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