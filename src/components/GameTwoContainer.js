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
    // this.props.displayRightImage()
    
}
  render(){
    return(
      <GameTwo name={this.props.name} twoPictures={this.props.twoPictures} breedName={this.props.breedName}/> ///fix here
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    twoPictures: state.twoPictures,
    breedName: state.breedName
  }
}

export default connect(mapStateToProps, {displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwoContainer)

