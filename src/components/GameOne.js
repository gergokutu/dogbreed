import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOne(props) {
  const { picture } = props
  // picture is an array » we need a string!
  const string = picture.toString()
  // we have to split that string (the url) by '/'...
  // ...and we have to get the breed name which is the 5th...
  // ...so we need [4] in <p>
  const breedName = string.split('/')
  console.log("breedName:", breedName)
  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>
      <div>
        {<img src={picture} alt="Dog" />}
        {!picture && 'Loading...'}
        {<ul>
          <li key='goodAnswer'>{breedName[4]}</li>
        </ul>}
      </div>
      <Link to="/">Go back to the index</Link>
    </div>

  )
}