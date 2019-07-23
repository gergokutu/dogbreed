// step 10
// import the necessary things for react-redux transformation
// go and combine reducers » src/index.js
import { connect } from 'react-redux';
import {displayImages} from '../actions/dogBreedImages'

import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
// third step
// import request from 'superagent'

class DogBreedImagesContainer extends Component {
  // step1 » we do not need the local state
  // state = { images: null }

  // step2
  // we have to get the data through an action creator » ./action/DogBreedImages.js
  componentDidMount() {
    // const breed = this.props.match.params.breed
    // request
    //   .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
    //   .then(response => this.updateImages(response.body.message))
    //   .catch(console.error)
    this.props.displayImages()
  }

  // step7 » uncomment/delete
  // updateImages(images) {
  //   this.setState({
  //     images: images
  //   })
  // }

  // step 6 » correct the react states to redux
  // you have to connect it with the store, but first...
  // ...use mapStateToProps and change updateImages() » because of setState works only...
  // ...on React local store
  render() {
    return <div>
      <DogBreedImages name={this.props.match.params.breed} images={this.props.images} /> 
    </div>
  }
}

// step8
// create mapStateToProps
const mapStateToProps = (state) => {
  return {
    images: state
  }
}

//step9 » connect it
// do not forget to remove the export default from the class
// step10 put displayImages() inside the componentDidMount()...
// and connect it as well
export default connect(mapStateToProps, { displayImages })(DogBreedImagesContainer)