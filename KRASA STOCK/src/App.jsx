import { useState } from 'react'
import './App.css'
import NavBar from './routes/components/NavBar'
import Logueo from "./routes/components/Logueo"
import Categoria1 from "./routes/components/Categoria1"
import Categoria2 from "./routes/components/Categoria2"
import Probando from './probando'
import {Routes,Route, Navigate} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Logueo></Logueo>} ></Route>
          <Route path='Categoria1'  element={<Categoria1></Categoria1>}></Route>
          <Route path='Categoria2'  element={<Categoria2></Categoria2>}></Route>
        <Route path='*' element={<Navigate to="/" />}></Route>
        <Route path='/' element={<Probando></Probando>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
