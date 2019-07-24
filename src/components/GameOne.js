import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOne(props) {
  const { picture } = props
  // picture is an array » we need a string!
  const string = picture.toString()
  // we have to split that string (the url) by '/'...
  // ...and we have to get the breed name which is the 5th...
  // ...so we need [4]
  const breedName = string.split('/')[4]
  console.log("breedName:", breedName)
  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>
      <div>
        {!picture && 'Loading...'}
        {<img src={picture} alt="Dog" />}

        {<ul>
          <li key='goodAnswer'>{breedName}</li>

          {props.dogName.map(dog => {
            return <li key='wrongAnswer'>{dog}</li>
          })}
        </ul>}
        
      </div>
      <Link to="/">Go back to the index</Link>
    </div>

  )
}