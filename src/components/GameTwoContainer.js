import React, {Component} from 'react'
import GameTwo from './GameTwo';
import {connect} from 'react-redux'
import {displayRandomNames} from '../actions/gameTwo'

class GameTwoContainer extends Component{
  componentDidMount(){
    this.props.displayRandomNames()

  }
  render(){
    return(
      <GameTwo name={this.props.name}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, {displayRandomNames})(GameTwoContainer)

