import React from 'react'
import { Link } from 'react-router-dom'

export default function DogList(props) {
  return (
  <div>
    This list contains {props.dogBreeds.length} breeds of dog.
    <ul>
      {props.dogBreeds.map(breed => {
        return <li key ={breed}>
          <Link to ={`/dog-breeds/${breed}`}>{breed}</Link>
          </li>
      })}
    </ul>
  </div>
  )
}