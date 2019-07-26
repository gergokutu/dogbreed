import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {displayRandomNames} from '../actions/gameTwo'
import {displayImagesToAnswer} from '../actions/twoRandomImages'
import {displayRightImage} from '../actions/getRightImage'

function GameTwo(props){
  const {gameTwo} = props
<<<<<<< HEAD
=======

  const shuffledPictures = gameTwo.twoPictures
  .concat(props.breedName)
  .sort(()=> Math.random() - 0.5)

  const correctPic = (event) => {
    alert('Hello')
  }

>>>>>>> 66096877ec1e36edf61d418d12ddc8be4b6caeff
    return(
      <div className="gameTwo">
        <h1>GAME TWO</h1>
        <Link to="/">Go back to the Homepage</Link>
        <p>Select the right Image below</p>
    
        <div className="randomNames">
          {!gameTwo.name && 'Loading...'}
          <h2><b>{gameTwo.name}</b></h2>
        </div>
        
<<<<<<< HEAD
        <div className="ImageAnswers">
          {gameTwo.twoPictures.map((url, id) => <img src={url} alt='Dog' key={id}/>)}
=======
        <div onClick={correctPic} className="ImageAnswers">
          {shuffledPictures.map((url, id) => <img  src={url} alt='Dog' key={id}/>)}
>>>>>>> 66096877ec1e36edf61d418d12ddc8be4b6caeff
        </div>
<<<<<<< HEAD

        <div className="rightImage">
          <img src={props.breedName} alt='Dog'/>
        </div>
=======
>>>>>>> feat/gameTwo
      </div>
    )
  }
const mapStateToProps = (state) => {
  return{
    ...state
  }
}

export default connect(mapStateToProps,{displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwo)