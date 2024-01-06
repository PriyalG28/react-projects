import { useState } from "react"


function App() {

  const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-xl">
          <button className="outline-none p-6 rounded text-white shadow" style={{backgroundColor:"violet"}} onClick={() => setColor("violet")}>Violet</button>
     
        
          <button className="outline-none p-6 rounded text-white shadow" style={{backgroundColor:"indigo"}} onClick={() => setColor("indigo")}>Indigo</button>
     
        
          <button className="outline-none p-6 rounded text-white shadow" style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>
     
        
          <button className="outline-none p-6 rounded text-white shadow" style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>
     
        
          <button className="outline-none p-6 rounded text-white shadow" style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
     
        
          <button className="outline-none p-6 rounded text-white shadow" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
     
   </div>
    </div> 
    </div>
  )
}

export default App
