"use client";
import RandomFlip from '@/components/RandomFlip';
import CardStackTwo from "@/components/RandomFlipTwo";
import Image from 'next/image';
import side2 from "@/public/assests-two/panel2.png"

import React from 'react'
const Panel = () => {
  return (
<main>
  <div className='w-full h-[1000px] m-auto pt-10 bg-[#f3f3f1] '>
      <div className="flex  justify-evenly ">
        <div className="flex flex-col  ">
          <div className='h-[412px] w-[592px] border-2 bg-[#e9c0e9] rounded-3xl '>
            <div className='h-[200px] w-[512px]  m-auto mt-8'>
                    <RandomFlip/>
            </div>
            <div className='h-[100px] w-[512px]  m-auto mt-6'>
              <h1 className="font-extrabold text-[#61489a] text-3xl"><a href="#">Share your content in <br/>limitless ways on your <br/>Linktree.</a></h1>
            </div>

          </div>
          <div className='h-[412px] w-[592px] border-2 bg-[#d2e823] rounded-3xl mt-8'>
          <div className='h-[200px] w-[512px]  m-auto mt-12 ml-[125px] '>
          <CardStackTwo />
            </div>
            <div className='h-[100px] w-[512px]  m-auto mt-8'>
              <h1 className="font-extrabold text-3xl"><a href="#">Sell products and collect<br/> payments. It’s monetization<br/> made simple.</a></h1>
            </div>
          </div>
        </div>
        <div className='h-[840px] w-[590px] border-2 border-blue-100 bg-[#780016] rounded-3xl '>
          <div className ="w-[512px] h-[604px] bg-[#780016] m-auto mt-10"> 
          <Image
              src={side2}
              alt="Linktree Logo"
              height={800}
              width={512}
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className='h-[100px] w-[512px]  m-auto mt-8'>
              <h1 className="font-extrabold text-[#c487c7] text-3xl"><a href="#">Grow, own and engage <br/> your audience by unifying <br/> them in one place.</a></h1>
            </div>
        </div>
      </div>
  </div>
</main>      
  )
}

export default Panel