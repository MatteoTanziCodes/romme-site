import React from 'react'
import '../styles/globals.css'

const Main = () => {
  return (
    <div className='main'>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop src={`/vid.mp4`} />
      </div>
      <div className='content'>
        <img className="overlay" src={`/rmcs.png`} />
      </div>
    </div>
  )
}

export default Main