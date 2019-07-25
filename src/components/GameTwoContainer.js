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
    console.log(this.props)

  }

  // (-, parameter) » '_' universal sign for unused prev params
  // check componentDidUpdate in react lifecycle methods
  componentDidUpdate(prevProps){
    if(prevProps.name !== this.props.name) {
      console.log('sdfgd', this.props.name )
      this.props.displayRightImage(this.props.name)
    }
  } 

  render(){
    return(
      <GameTwo name={this.props.name} twoPictures={this.props.twoPictures} breedName={this.props.breedName}/> ///fix here
    )
  }
}
const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    name: state.gameTwo.name,
    twoPictures: state.gameTwo.twoPictures,
    breedName: state.breedName
  }
}

export default connect(mapStateToProps, {displayRandomNames, displayImagesToAnswer, displayRightImage})(GameTwoContainer)

