import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <NavBar></NavBar>
      </div>
      <h1 className='titulo'> CONTROL STOCK TIENDA KRASA</h1>
    </>
  )
}

export default App
