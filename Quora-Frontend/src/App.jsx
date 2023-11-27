import { React } from 'react'

import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Sections/Navbar'
import HindiLanguage from './Components/Spaces/HindiLanguage'

function App() {

  return (
    <>
    <Navbar/>
    {/* <h1>Quora Heading</h1> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/hindi-language" element={<HindiLanguage/>} />
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
