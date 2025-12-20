import { useState } from 'react'
function App() {

  const [color, setColor] = useState("purple")
 

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

      <div
      className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 space-x-4"
      > 
       <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
        
       <button
       onClick={()=> setColor("red")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
       >Red</button>

       <button
       onClick={()=> setColor("blue")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
       >Blue</button>

       <button
       onClick={()=> setColor("pink")}
       className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "pink"}}
       >pink</button>

        <button
        onClick={()=> setColor("green")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}
       >Green</button>

       <button
       onClick={()=> setColor("yellow")}
       className="outline-none px-4 py-1 rounded-full text-purple shadow-lg"
        style={{backgroundColor: "yellow"}}
       >Yellow</button>

       <button
       onClick={()=> setColor("violet")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "violet"}}
       >Violet</button>

       <button
       onClick={()=> setColor("black")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}
       >Black</button>

       <button
       onClick={()=> setColor("white")}
       className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "white"}}
       >White</button>

       <button
       onClick={()=> setColor("purple")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "purple"}}
       >purple</button>

       <button
       onClick={()=> setColor("orange")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}
       >Orange</button>



        </div>
      </div>
    </div>
  )
}

export default App
