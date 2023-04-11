import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import { Outlet } from 'react-router-dom'
import Section from './Componets/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Section></Section>
      
    </div>
  )
}

export default App
