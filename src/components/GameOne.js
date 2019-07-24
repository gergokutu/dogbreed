import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOne(props) {
  const { picture } = props
  console.log("Pictures", picture)
  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>
      <div>
        {<img src={picture} alt="Dog" />}
        {!picture && 'Loading...'}

      </div>
      <Link to="/">Go back to the index</Link>
    </div>

  )
}