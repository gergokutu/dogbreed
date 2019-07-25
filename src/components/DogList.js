import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Doglist.css'

export default function DogList(props) {
  return (
  <div className='dogListBlock'>
    <p>This list contains {props.dogBreeds.length} breeds of dog.</p>
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