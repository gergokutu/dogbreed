import React, {Component} from 'react'
import GameTwo from './GameTwo';
import {connect} from 'react-redux'
import {displayImagesToAnswer} from '../actions/twoRandomImages'
import {displayRandomNames} from '../actions/gameTwo'

class GameTwoContainer extends Component{
  componentDidMount(){
    this.props.displayRandomNames()
    this.props.displayImagesToAnswer()}
  render(){
    return(
      <GameTwo name={this.props.name} twoPictures={this.props.twoPictures}/> ///fix here
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    twoPictures: state.twoPictures
  }
}

export default connect(mapStateToProps, {displayRandomNames, displayImagesToAnswer})(GameTwoContainer)

