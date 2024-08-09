"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typewriter from 'typewriter-effect';
import AnimatedText from '@/components/AnimatedText';
import CardOne from '@/app/(cards)/card-one/page';

const Main = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-[800px]  bg-[#254f1a]'>
      <div className='w-full mt-[150px] md:w-1/2 text-[#d1e722] flex flex-col justify-center items-center md:items-start p-4 md:p-16'>
        <h1 className='text-3xl md:text-5xl font-extrabold'>
          <AnimatedText text="Everything you are. In one, simple link in bio." />
        </h1>
        <br/>
        <Typewriter
          options={{
            strings: [
              'Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.'
            ],
            autoStart: true,
            delay: 30,
            loop: true,
          }}
        />
        <br/>
        <br/>
        <div className='flex flex-col md:flex-row items-center'>
          <Input className="w-full md:w-[250px] h-[60px] text-[17px] mb-2 md:mb-0 md:mr-2" type='text' placeholder='Linktree/yourname' />
          <Button className='w-full md:w-[200px] h-[60px] text-[17px] text-black rounded-full bg-[#e9c0e9] hover:bg-[#e5b9e1]'>
            Claim your linktree
          </Button>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center p-4  md:mt-0'>
        <div className='w-full md:w-auto mb-[100px] '>
          <CardOne />
        </div>
      </div>
    </div>
  );
};

export default Main;
