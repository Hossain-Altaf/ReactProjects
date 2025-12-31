import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running]);
 

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Stop Watch
        </h1>

        <div className="bg-gray-900 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white tracking-wider">
            <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}</span>
            <span className="mx-1">:</span>
            <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}</span>
            <span className="mx-1">:</span>
            <span>{("0"+((time/10)%100)).slice(-2)}</span>
          </div>
        </div>
         
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button 
            onClick={()=>{setRunning(true)}}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Start
          </button>
          <button 
            onClick={()=>{setRunning(false)}}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Stop
          </button>
          <button 
            onClick={()=>{setTime(0)}}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
