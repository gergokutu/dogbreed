import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {displayRandomNames} from '../actions/gameTwo'
import {displayImagesToAnswer} from '../actions/twoRandomImages'
import {displayRightImage} from '../actions/getRightImage'

function GameTwo(props){
  const {gameTwo} = props
  console.log("gametwo", gameTwo)
    return(
      <div className="gameTwo">
        <h1>GAME TWO</h1>
        <p>Select the right Image below</p>
        
        <div className="randomNames">
          {!gameTwo.name && 'Loading...'}
          <h2><b>{gameTwo.name}</b></h2>
        </div>
        
        <div className="ImageAnswers">
          {gameTwo.twoPictures.map((url, id) => <img src={url} alt='Dog' key={id}/>)}
        </div>

        <div className="rightImage">
<<<<<<< HEAD
          {gameTwo.twoPictures.find}
          
=======
          <img src={props.breedName} alt='Dog'/>
>>>>>>> f3079270ec427fc1d50dfaed524f95643a799679
        </div>
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
const mapStateToProps = (state) => {
  return{
    ...state
  }
}

export default connect(mapStateToProps,{displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwo)