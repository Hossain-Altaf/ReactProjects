import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let c=13;
  let [C,setC]=useState(13)

  const addValue=()=>{
    C++;
    setC(C);
   //console.log("value added",c);
  }

  const decraseValue=()=>{
    C--;
    setC(C);  
    //console.log("value removed",c);
  }

  return (
    <>
      <h1>Counter:{C}</h1>

    <button onClick={addValue}>
      <h3>tap here</h3>
    </button>

    <br />
    <br />

    <button onClick={decraseValue}>
      <h3>remove</h3>
      </button>
    </>
  )
}

export default App
