"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import Typewriter from 'typewriter-effect';
import AnimatedText from '@/components/AnimatedText';
import CardStack from '@/components/CardStack';

const GetstartedTwo = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row w-full h-auto lg:h-[600px] bg-[#780016]'>
        <div className='w-full lg:w-[50%] text-[#e9c0e9] flex flex-col justify-center items-center lg:items-start p-5 lg:m-[80px] lg:mt-[150px]'>
          <h1 className='text-3xl lg:text-5xl font-extrabold text-center lg:text-left'>
            <AnimatedText text="Share your Linktree from your Instagram, TikTok, Twitter and other bios" />
          </h1>
          <br/>
          <Typewriter
            options={{
              strings: ['Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.'],
              autoStart: true,
              delay: 30,
              loop: true,
            }}
          />
          <br/>
          <Button className='w-[200px] h-[50px] lg:h-[60px] text-[15px] lg:text-[17px] text-black rounded-full bg-[#e9c0e9] hover:bg-[#e5b9e1]'>
            Get started for free
          </Button>
        </div>
        <div className='w-full lg:w-[50%] flex justify-center items-center p-5 lg:p-0'>
          <div className='w-full h-full flex justify-center items-center rounded-full bg-[#780016]'>
            <CardStack/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetstartedTwo;
