import { connect } from 'react-redux';
import { displayImages } from '../actions/dogBreedImages'
import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'

class DogBreedImagesContainer extends Component {
  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.displayImages(breed)
  }

  render() {
    return <div>
      <DogBreedImages name={this.props.match.params.breed} images={this.props.images} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, { displayImages })(DogBreedImagesContainer)