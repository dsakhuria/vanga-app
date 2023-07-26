import { useState } from 'react'
import './App.css'

function App() {

  let boldVanga = <span className='text-8xl font-bold'>Vanga</span>

  return (
    <>
     <div 
     className='
      w-full h-screen

      bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] 
      from-gray-900 via-purple-900 to-violet-600
      
      flex flex-col items-center justify-center
      text-white text-1xl
      '>
        <span className='w-full text-center text-4xl'>Welcome to {boldVanga}</span>
        <span className='w-8/12 text-neutral-400'>try to guess number that is "vanga" has in her mind, if u manage to guess it, u will surely be next "vanga".</span>
        <input type="text" name="guessInput" id="guessInput" placeholder='Enter number here' />
      </div> 
    </>
  )
}

export default App
