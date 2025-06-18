import { useState } from 'react'
import { HashRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'

import Projects from "./pages/projects"
function App() {
  

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element ={<Projects/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
