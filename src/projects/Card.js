import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.data.imgLink} alt={props.data.title}/>
      <a href={props.data.mainLink} target='_blank'>
        <h3>{props.data.title}</h3>
      </a>
      <p>{props.data.description}</p>
    </div>
  )
}
