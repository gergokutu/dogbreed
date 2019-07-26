import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {displayRandomNames} from '../actions/gameTwo'
import {displayImagesToAnswer} from '../actions/twoRandomImages'
import {displayRightImage} from '../actions/getRightImage'

function GameTwo(props){
  const {gameTwo} = props

  console.log('twoPictures test:', gameTwo.twoPictures)
  console.log('props.breedName test:', props.breedName)

  const shuffledPictures = gameTwo
    .twoPictures
    .concat(props.breedName)
    .sort(()=> Math.random() - 0.5)

  console.log('shuffledPictures test:', shuffledPictures)

  const correctPic = (data) => {
    if (data.url) {
      alert('great')
    } else {
      alert('sorry')
    }
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
  return{
    ...state
  }
}

export default connect(mapStateToProps,{displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwo)