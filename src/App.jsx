import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  return (
    <>
      <Student name="spongebob" age={10} />
      <Student name="patrick" age={11} />
    </>
  )
}

export default App
