import React from 'react'
import Navheader from './components/Navheader'
import Footer from './components/Footer'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Hire from './components/Hire'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import { Home } from 'lucide-react'

const App = () => {
  return (
    <div>
     <Navheader/>
     
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/hireme" element={<Hire/>} />
          <Route path='/project' element={<Projects/>}/>
        </Routes>
        {/* <Footer/> */}
    </div>
  )
}

export default App