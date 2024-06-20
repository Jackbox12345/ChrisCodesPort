import React from 'react'
import crypto from '../assets/images/crypt.jpg'
import netflix from '../assets/images/net.jpg'
import Projectitem from './Projectitem'

const Projects = () => {
  return (
    <div id= 'projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    <p className='text-center py-8'>
      I built simple yet Beautiful websites
    </p>
    <div className='grid sm:grid-cols-2 gap-12'>
      <Projectitem img={netflix} title={'netfilx clone'}/>
      <Projectitem img={crypto} title={'crypto app'}/>
     

    </div>
  </div>
  )
}

export default Projects
