import React from 'react'
import './Title.css'

const Title = ({subtit,title}) => {
  return (
    <div className='title'>
        <p>{subtit}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title