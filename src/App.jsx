import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import { Outlet } from 'react-router-dom'
import Section from './Componets/Section'
import Navber from './Componets/Navber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      
    </div>
  )
}

export default App
