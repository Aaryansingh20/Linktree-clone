"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import Typewriter from 'typewriter-effect';
import AnimatedText from '@/components/AnimatedText';
import CardThree from '@/app/(cards)/card-three/page';

const GetStartedThree = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row w-full h-auto lg:h-[600px] bg-[#f3f3f1]'>
        <div className='w-full lg:w-[50%] flex justify-center items-center p-5 lg:p-0'>
          <div className='w-full h-full flex justify-center items-center bg-[#f3f3f1]'>
            <CardThree/>
          </div>
        </div>
        <div className='w-full lg:w-[50%] text-[#262b37] flex flex-col justify-center items-center lg:items-start p-5 lg:p-[80px]'>
          <h1 className='text-3xl lg:text-5xl font-extrabold'><AnimatedText text="Analyze your audience" /></h1>
          <h1 className='text-3xl lg:text-5xl font-extrabold'><AnimatedText text="and keep your" /></h1>
          <h1 className='text-3xl lg:text-5xl font-extrabold'><AnimatedText text="followers engaged." /></h1>
          <br />
          <Typewriter
            options={{
              strings: ['Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.'],
              autoStart: true,
              delay: 30,
              loop: true,
            }}
          />
          <br />
          <Button className='w-[200px] h-[50px] lg:h-[60px] text-[15px] lg:text-[17px] text-[#262b37] rounded-full bg-[#e9c0e9] hover:bg-[#dcb4dc]'>
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GetStartedThree;
