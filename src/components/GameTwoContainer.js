import React, {Component} from 'react'
import GameTwo from './GameTwo';
import {connect} from 'react-redux'
import {displayImagesToAnswer} from '../actions/twoRandomImages'
import {displayRandomNames} from '../actions/gameTwo'
import {displayRightImage} from '../actions/getRightImage'

class GameTwoContainer extends Component{
  componentDidMount(){
    this.props.displayRandomNames()
    this.props.displayImagesToAnswer()
  }

  // (-, parameter) » '_' universal sign for unused prev params
  // check componentDidUpdate in react lifecycle methods
  componentDidUpdate(prevProps){
    if(prevProps.name !== this.props.name) {
      this.props.displayRightImage(this.props.name)
    }
  } 

  render(){
    return(
      <GameTwo name={this.props.name} twoPictures={this.props.twoPictures} breedName={this.props.breedName}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.gameTwo.name,
    twoPictures: state.gameTwo.twoPictures,
    breedName: state.breedName
  }
}

export default connect(mapStateToProps, {displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwoContainer)

