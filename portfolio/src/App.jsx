import React from 'react'
import Projects from './sections/Projects';

const App = () => {
  return (
    <main className='text-black'>
   <section id='home'className='border border-red-500 h-dvh relative text-black-300 px-5 md:p-0'>
    <div className='w-full h-full flex-center'>
    <div className='container relative w-full h-full'>
      <div className='md:mt-40 mt-20'>
      <p className='font-medium md:text-2xl text-base'>👋🏻 hei, i'm Here</p> 
      </div>
    </div>
    </div>
   </section>
   <Projects />
   </main>
  )
}

export default App;