import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {displayRandomNames} from '../actions/gameTwo'
import {displayImagesToAnswer} from '../actions/twoRandomImages'

function GameTwo(props){
  const {gameTwo} = props
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
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
const mapStateToProps = (state) => {
  return{
    ...state
  }
}

export default connect(mapStateToProps,{displayRandomNames, displayImagesToAnswer})(GameTwo)