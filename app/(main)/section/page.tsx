"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import CarouselSlide from '@/components/Slideshow'
import AnimatedButtons from '@/components/AnimatedButtons'

const Sections = () => {
  return (
    <div className='w-full h-auto bg-[#f3f3f1]  py-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <h1 className='font-extrabold text-3xl sm:text-5xl text-center'>
          The fast, friendly and powerful link in bio tool.
        </h1>
        <br/>
        <div className='flex justify-center'>
          <Button className='w-[150px] sm:w-[200px] h-[50px] sm:h-[60px] text-[15px] sm:text-[17px] text-black rounded-full bg-[#e9c0e9] hover:bg-[#e5b9e1]'>
            Explore all plans
          </Button>
        </div>
        <br/>
        <div className='flex flex-wrap justify-around m-6'>
          <div className='h-[300px] sm:h-[420px] w-[300px] sm:w-[350px] border-2 rounded-3xl bg-white mb-6 sm:mb-0'>
            <div className=' h-[300px] w-[300px] m-auto mt-5'>
              <CarouselSlide/>
            </div>
            <h2 className="text-center font-bold ">
            Seamlessly connect your <br/> Linktree with the toolsyou already use.
            </h2>
          </div>
          <div className='h-[300px] sm:h-[420px] w-[300px] sm:w-[350px] border-2 rounded-3xl bg-white mb-6 sm:mb-0'>
          <div className=' h-[200px] w-[200px] m-auto mt-[50px] '>
            <AnimatedButtons/>
            </div>
            <h2 className="text-center mt-[68px] font-bold">
            Customize your Linktree to match <br/>your brand. Make it feel like you.
            </h2>
           </div>
          <div className='h-[300px] sm:h-[420px] w-[300px] sm:w-[350px] border-2 rounded-3xl bg-white'>
          <div className=' h-[300px] w-[300px] m-auto mt-5'>
              <CarouselSlide/>
            </div>
            <h2 className="text-center font-bold ">
            Manage, update and schedule <br/> content with our quick, easy editor.
            </h2>
          </div>
        </div>
        <br/>
        <div className='bg-[#f3f3f1]'>
          <h1 className='font-extrabold text-3xl sm:text-5xl text-center'>
            As featured in...
          </h1>
          <div className='flex flex-wrap justify-around m-6'>
            <div className='w-[200px] sm:w-[270px] h-[60px] sm:h-[80px] bg-white rounded-3xl mb-6 sm:mb-0'>
            <h1 className='text-center mt-7 font-bold text-2xl text-gray-500 '>INSIDER

            </h1>
            </div>
            <div className='w-[200px] sm:w-[270px] h-[60px] sm:h-[80px] bg-white rounded-3xl mb-6 sm:mb-0'>
            <h1 className='text-center mt-7 font-bold text-2xl text-gray-400 '>Mashabale

            </h1>
            </div>
            <div className='w-[200px] sm:w-[270px] h-[60px] sm:h-[80px] bg-white rounded-3xl mb-6 sm:mb-0'>
            <h1 className='text-center mt-7 font-bold text-2xl text-gray-500 '>FORTUNE
              
            </h1>
            </div>
          </div>
          <div className='w-[200px] sm:w-[270px] h-[60px] sm:h-[80px] bg-white rounded-3xl m-auto'>
          <h1 className='text-center pt-7 font-bold text-2xl text-gray-800 '>Forbes</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sections
