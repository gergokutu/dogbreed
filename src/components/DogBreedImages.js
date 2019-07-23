import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  return (
    <div className="dog-breed-images">

      This page will show images of a specific dog breed.

      <Link to="/">Go back to the index</Link>
    </div>
  )
}