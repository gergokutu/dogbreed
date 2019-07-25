import React from 'react'
import {Link} from 'react-router-dom'

function GameTwo(props){
  const {name} =props
    return(
      <div className="gameTwo">
        <h1>GAME TWO</h1>
        <p>Select the right Image below</p>
        
        <div className="randomNames">
          {!name && 'Loading...'}
          <ul>
            {props.name.map(oneDog =>{
              return <li key ={oneDog}>{oneDog}</li>
            })}
          </ul>
        </div>
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }


export default GameTwo