import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {displayRandomNames} from '../actions/gameTwo'
import {displayImagesToAnswer} from '../actions/twoRandomImages'
import {displayRightImage} from '../actions/getRightImage'

function GameTwo(props){
  const {gameTwo} = props

  const shuffledPictures = gameTwo.twoPictures
  .concat(props.breedName)
  .sort(()=> Math.random() - 0.5)

  const correctPic = (event) => {
    alert('Hello')
  }

    return(
      <div className="gameTwo">
        <h1>GAME TWO</h1>
        <Link to="/">Go back to the Homepage</Link>
        <p>Select the right Image below</p>
    
        <div className="randomNames">
          {!gameTwo.name && 'Loading...'}
          <h2><b>{gameTwo.name}</b></h2>
        </div>
        
        <div onClick={correctPic} className="ImageAnswers">
          {shuffledPictures.map((url, id) => <img  src={url} alt='Dog' key={id}/>)}
        </div>
      </div>
    )
  }
const mapStateToProps = (state) => {
  return{
    ...state
  }
}

export default connect(mapStateToProps,{displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwo)