import React from 'react'
import { Fade } from 'react-reveal'

const ComingSoon = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-timer p-8 pt-20 text-white">
        <Fade bottom>
          <div className="text-center">
            <h2 className="text-6xl title-timer">We Are</h2>
            <h2 className="text-6xl uppercase poppins">Coming Soon!</h2>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default ComingSoon
