import React from 'react'
import GameOneContainer from './GameOneContainer'
import {Link} from 'react-router-dom'


export default function Button(props) {
  return (

    <div>
     <Link to={"/GameOne/"}> <button><h3>Game One</h3></button></Link>
    <button><h3>Game Two</h3></button>
    <button><h3>Game Three</h3></button>
  </div>
  )
}