import { useState } from 'react'
import './App.css'

function App() {

  // number E (1,100)
  

  let [userInput, setUserInput] = useState('')

  let handleChange = (e) => {
    setUserInput(e.target.value)
  }

  // transforming string to int number
  const parsedInput = parseInt(userInput, 10)

  const calculation = () => {

    let generated = Math.floor(Math.random() * 101)
    // let generated = 1

    if (generated === parsedInput) {
      console.log("uve guessed it")
    }
    else if (generated !== parsedInput) {
      console.log("try again")
      setUserInput('')
    }


  }

  let boldVanga = <span className='text-8xl font-bold'>Vanga</span>

  return (
    <>
     <div 
     className='
      w-full h-screen

      bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] 
      from-gray-900 via-purple-900 to-violet-600
      
      flex flex-col items-center justify-between
      text-white text-1xl
      '>
        <span className=' w-full h-auto mt-20 flex flex-col justify-center text-center text-4xl'>Welcome to {boldVanga}</span>
        <span className=' w-8/12 h-auto text-neutral-400'>try to guess number that is "vanga" has in her mind, if u manage to guess it, u will surely be next "vanga".</span>
        
        <div className=' w-full h-2/5 flex flex-col items-center justify-center'>
          <input type="text" name="guessInput" id="guessInput" placeholder='Enter number here'
                value={userInput}
                onChange={handleChange}
                className='
                text-center
                bg-transparent
                border-2 rounded-lg px-10 py-4
                mb-4
                ' />
          <button 
          onClick={calculation}
          className='border-2 rounded-lg 
                    px-24 py-4 mt-4
                    
                    '
                    >Try</button>
        </div>
        <footer className='w-full h-1/5 bg-neutral-900'></footer>
      </div> 
    </>
  )
}

export default App
