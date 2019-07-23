import React, { Component } from 'react'
import DogList from './DogList'
import { connect } from 'react-redux';
// import { Link } from 'react-router-doom'
import { displayDogs } from '../actions/dogList'

class DogListContainer extends Component {
  // state = { dogBreeds: null }

  componentDidMount() {
    this.props.displayDogs()
  }

  render() {
    console.log(this.props)
    if (!this.props.dogBreeds) return 'Loading...'
    else {
      return <DogList dogBreeds={this.props.dogBreeds} />
    }
  }
}

const mapstateToProps = (state) => {
  return {
    dogBreeds: state
  }
}
export default connect(mapstateToProps, { displayDogs })(DogListContainer)

