import React from 'react'
import Projects from './sections/Projects';
import Hero from './sections/Hero';
import About from './sections/About';


const App = () => {
  return (
    <main className='text-black'>
    <Hero />
    <About />
   <Projects />
   </main>
  )
}

export default App;