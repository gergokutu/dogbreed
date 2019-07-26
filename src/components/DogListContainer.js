import React, { Component } from 'react'
import DogList from './DogList'
import { connect } from 'react-redux';
import { displayDogs } from '../actions/dogList'

class DogListContainer extends Component {

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
    dogBreeds: state.dogBreeds
  }
}
export default connect(mapStateToProps, { displayDogs })(DogListContainer)

