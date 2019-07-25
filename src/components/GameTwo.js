import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class GameTwo extends Component{
  render(){
    return(
      <div className="gameTwo">
        <h1>GAME TWO</h1>
        <p>Select the right Image below</p>
        
        <div className="randomNames">
          {!name && 'Loading...'}
        </div>
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
}

export default GameTwo