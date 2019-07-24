import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameOne from './GameOne'
import { displayQuestionImage } from "../actions/randomPicture"


class GameOneContainer extends Component {
  componentDidMount() {
    this.props.displayQuestionImage()
  }

  render() {
    return (
      <GameOne picture={this.props.picture} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    picture: state.picture
  }
}

export default connect(mapStateToProps, { displayQuestionImage })(GameOneContainer)