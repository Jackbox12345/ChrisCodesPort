import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import back from '../assets/images/bg2.jpg'
const Main = () => {
  return (
    <div id = 'main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1] ' src={back} alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center' >
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Christian Lapitan</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800' >I'm a
            <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Developer',
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            'Coder',
            2000,
            'Tech Enthusiast',
            1000,
        ]}
        wrapper="div"
        cursor={true}
        speed={50}
        style={{ fontSize: '1em', paddingLeft:'5px' }}
        repeat={Infinity}
        />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaFacebook className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaLinkedin className='cursor-pointer' size={20}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main
