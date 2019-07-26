import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayRandomNames } from '../actions/gameTwo'
import { displayImagesToAnswer } from '../actions/twoRandomImages'
import { displayRightImage } from '../actions/getRightImage'
import { sendGoodAnswer2 } from '../actions/sendGoodAnswer2'
import { sendWrongAnswer2 } from '../actions/sendWrongAnswer2'

function GameTwo(props) {
  const { gameTwo } = props

  const shuffledPictures = gameTwo
    .twoPictures
    .concat(props.breedName)
    .sort(() => Math.random() - 0.5)

  const correctPic = (data) => {
    if (data.url) {
      props.sendGoodAnswer2(data)
      alert('Correct! Click OK to continue the test.')
      props.displayRandomNames()
      props.displayImagesToAnswer()
    } else {
      console.log('data', data)
      props.sendWrongAnswer2(data)
      alert(`Wrong, the correct answer is: ${gameTwo.name}`)
      setTimeout(() => {
        props.displayRandomNames()
        props.displayImagesToAnswer()
      }, 1000)
    }
  }

  const sucessRate = Math.floor(gameTwo.goodAnswers2.length/(gameTwo.goodAnswers2.length+gameTwo.wrongAnswers2.length)*100)

  return (
    <div className="gameTwo">
      <h1>GAME TWO</h1>
      <Link to="/">Go back to the Homepage</Link>
      <p>Select the right Image below</p>

      <div className="randomNames">
        {!gameTwo.name && 'Loading...'}
        <h2><b>{gameTwo.name}</b></h2>
      </div>

      <div className="ImageAnswers">
        {
          shuffledPictures
            .map((data) => {
              const url = data.url ? data.url : data

              return <img
                src={url}
                alt='Dog'
                onClick={() => correctPic(data)}
                key={url}
              />
            })
        }
      </div>

      <div className='sucessRate'>  
        Your success rate is: {!sucessRate ?  '0' : sucessRate}%
      </div>

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {
  displayRandomNames,
  displayImagesToAnswer,
  displayRightImage,
  sendGoodAnswer2,
  sendWrongAnswer2})(GameTwo)