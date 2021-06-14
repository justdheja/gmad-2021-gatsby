import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-timer p-8 pt-20 text-white">
        <div className="text-center animate-bounce">
          <h2 className="text-6xl title-timer">Please Wait</h2>
        </div>
      </div>
    </div>
  )
}

export default Loader
