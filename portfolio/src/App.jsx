import React from 'react'
import Projects from './sections/Projects';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';

const App = () => {
  return (
    <main className='text-black'>
    <Hero />
    <About />
    <Education />
   <Projects />
   </main>
  )
}

export default App;