import React from 'react'

export default function DogList(props) {
  return (
  <div>
    <ul>
      {props.dogBreeds.map(breed => {
        return <li>{breed}</li>
      })}
    </ul>
  </div>
  )
}