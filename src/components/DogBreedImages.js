import React from 'react'
import { Link } from 'react-router-dom'

// only classes needs/have the render()
export default function DogBreedImages(props) {
  const { name, images } = props
  
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      <p>This page will show images of the { name } breed.</p>

      <Link to="/">Go back to the index</Link>
      <div>
        {images && images.map((url, id) => <img src={url} alt="Dog" key={id} />)}
        {!images && 'Loading...'}
      </div>
    </div>
  )
}