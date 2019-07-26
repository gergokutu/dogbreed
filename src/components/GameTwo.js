import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displayRandomNames } from '../actions/gameTwo'
import { displayImagesToAnswer } from '../actions/twoRandomImages'
import { displayRightImage } from '../actions/getRightImage'

function GameTwo(props) {
  const { gameTwo } = props

  const shuffledPictures = gameTwo
    .twoPictures
    .concat(props.breedName)
    .sort(() => Math.random() - 0.5)

  console.log('shuffledPictures test:', shuffledPictures)

  const correctPic = (data) => {
    if (data.url) {
      alert('Correct! Click OK to continue the test.')
      props.displayRandomNames()
      props.displayImagesToAnswer()
    } else {
      console.log('data', data)
      alert(`Wrong, the correct answer is: ${gameTwo.name}`)
      setTimeout(() => {
        props.displayRandomNames()
        props.displayImagesToAnswer()
      }, 1000)
    }
  }

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


    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { displayRandomNames, displayImagesToAnswer, displayRightImage })(GameTwo)