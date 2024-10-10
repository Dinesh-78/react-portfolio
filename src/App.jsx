import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './hero/Hero'
import About from './About/About'
import Services from './services/Services'
import Contact from './contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Services />
    <Contact />
    
    </div>
  )
}

export default App
