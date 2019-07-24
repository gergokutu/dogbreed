import React from 'react'
import { Link } from 'react-router-dom'

// only classes needs/have the render()
export default function DogBreedImages(props) {
  const { name, images } = props

  return (
    <div className="dog-breed-images">
      <p>This page will shows images of the {name} breed.</p>
      <div>
        {images && images.map((url, id) => <img src={url} alt="Dog" key={id} />)}
        {!images && 'Loading...'}
      </div>
      <Link to="/">Go back to the index</Link>
    </div>
  )
  }