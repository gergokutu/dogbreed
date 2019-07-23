import React, { Component } from 'react'
import DogList from './DogList'
import { connect } from 'react-redux';
// import { Link } from 'react-router-doom'
import { displayDogs } from '../actions/dogList'

class DogListContainer extends Component {
  // commented out » we use redux state instead of react
  // state = { dogBreeds: null }

  componentDidMount() {
    this.props.displayDogs()
  }

  render() {
    if (!this.props.dogBreeds) return 'Loading...'
    else {
      return <DogList dogBreeds={this.props.dogBreeds} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dogBreeds: state
  }
}
export default connect(mapStateToProps, { displayDogs })(DogListContainer)

