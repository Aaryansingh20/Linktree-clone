"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import Typewriter from 'typewriter-effect';
import AnimatedText from '@/components/AnimatedText';
import CardTwo from '@/app/(cards)/card-two/page';

const GetStarted = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row w-full h-auto lg:h-[700px] bg-[#e9c0e9]'>
        <div className='w-full lg:w-[50%] flex justify-center items-center p-5 lg:p-0'>
          <CardTwo />
        </div>
        <div className='w-full lg:w-[50%] text-[#502274] flex flex-col justify-center items-center lg:items-start p-5 lg:p-[80px]'>
          <h1 className='text-3xl lg:text-5xl font-extrabold text-center lg:text-left'>
            <AnimatedText text="Create and customize" />
          </h1>
          <h1 className='text-3xl lg:text-5xl font-extrabold text-center lg:text-left'>
            <AnimatedText text="your Linktree in" />
          </h1>
          <h1 className='text-3xl lg:text-5xl font-extrabold text-center lg:text-left'>
            <AnimatedText text="minutes." />
          </h1>
          <Typewriter
            options={{
              strings: ['Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.'],
              autoStart: true,
              delay: 30,
              loop: true,
            }}
          />
          <br />
          <Button className='w-[200px] h-[50px] lg:h-[60px] text-[15px] lg:text-[17px] text-white rounded-full bg-[#5a1f87] hover:bg-[#6a1fa4]'>
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted;
