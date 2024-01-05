import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Taliwind Test</h1>
     <Card username="Priyal" btnText="click me"/>
     <br />
     <Card username="Kira" btnText="visit me" />
     <br />
     <Card username="Aananya" btnText="click here" />
    </>
  )
}

export default App
