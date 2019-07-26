import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameOne from './GameOne'
import { displayQuestionImage } from "../actions/randomPicture"
import { displayRandomTwoDogs } from "../actions/randomTwoDogs"
import { displayDogs } from '../actions/dogList'

class GameOneContainer extends Component {
  componentDidMount() {
    this.props.displayDogs()
    this.props.displayQuestionImage()
    this.props.displayRandomTwoDogs()
  }

  render() {
    return (
      <GameOne picture={this.props.picture} dogName={this.props.dogName}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    picture: state.picture,
    dogName: state.dogName,
    dogBreeds: state.dogBreeds
  }
}

export default connect(mapStateToProps, { displayQuestionImage, displayRandomTwoDogs, displayDogs})(GameOneContainer)