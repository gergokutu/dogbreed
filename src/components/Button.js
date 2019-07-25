import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Button.css'

export default function Button(props) {
  return (
    <div className='buttonBlock'>
      <Link to={"/GameOne/"}> <button><h3>Game One</h3></button></Link>
      <button><h3>Game Two</h3></button>
      <button><h3>Game Three</h3></button>
    </div>
  )
}