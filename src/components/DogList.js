import React from 'react'
import { Link } from 'react-router-dom'


export default function DogList(props) {
  return (
  <div>
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