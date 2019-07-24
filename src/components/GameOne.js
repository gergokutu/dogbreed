import React from 'react'
import { Link } from 'react-router-dom'

export default function GameOne(props) {
  const{images} = props
  
  return (
    <div className="game-one">
      <h1>GAME ONE</h1>
      <p>Please choose the correct answer</p>
      <div>
        {images && images.map((url, id) => <img src={url} alt="Dog" key={id} />)}
        {!images && 'Loading...'}
      </div>
      <Link to="/">Go back to the index</Link>
    </div>

 )
}