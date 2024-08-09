"use client";
import React from 'react'
import side1 from "@/public/side1.png"
import Image from "next/image";
import logoicon from "@/public/assets/linktree-logo.png"
import google from "@/public/google (1).png"
import apple from "@/public/apple-logo.png"
import { Input  } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Login = () => {
  return (
    <div className=' flex'>
    <div className=" h-[870px]  w-1/2">
    <div className='m-8'>
      <Image
      src={logoicon}
      alt='hi'
      height={26}
      width={115}
      />
    </div>
    <div className='w-[478px] h-[58px]  m-auto'>
        <h1 className="font-bold text-5xl text-center">Welcome back!</h1>
        <p className=" text-center text-lg pt-2 text-[#84877e] " >Login to you Linktree</p>
    </div>
    
    <div className="m-20">
      <Input placeholder='Email or Username' type='email' className="  w-[475px] h-[48px] bg-[#f6f7f5] "/><br/>
      <Input placeholder='Password' type='password' className="  w-[475px] h-[48px] bg-[#f6f7f5] "/><br/>
      <p className='text-[#8129d9] text-sm'>Log in with phone number</p>
<Link  href="/" >
<Button className="  w-[475px] h-[48px] text-lg text-white bg-[#8129d9] hover:bg-[#8129d9] hover:text-white rounded-full mt-8">Log in</Button>
</Link>
      <p className='text-center mt-5 text-[#8129d9]  underline'>Forgot password? <a className='text-bold no-underline md:underline text-black'>.</a> Forgot username?</p>
        <h1 className="text-center mt-3 text-[#84877e]">OR</h1>
        <Button className="  w-[475px] h-[48px] bg-white border-2 border-gray-100 hover:bg-slate-50 text-black g-10 text-bold rounded-full mt-3">
        <Image
            src={google}
            height={20}
            width={20}
            alt="Linktree Logo"
            style={{ objectFit: "cover" }}
          />
        <p className='text-bold ml-4 text-sm'>Sign up with Google</p>
        </Button>
        <Button className="  w-[475px] h-[48px] bg-white border-2 border-gray-100 hover:bg-slate-50 text-black g-10 text-bold rounded-full mt-3">
        <Image
            src={apple}
            height={20}
            width={20}
            alt="Linktree Logo"
            style={{ objectFit: "cover" }}
          />
          <p className='text-bold ml-4 text-sm'>Sign up with Apple</p>
          </Button>
       
        <p className='text-center m-10 text-[#84877e]'>Dont have an account?<a href='register' className='text-[#8129d9] underline' >Sign up</a></p>
        <p className='text-center m-10 text-[#84877e]'>You can also<a href='login' className='text-[#8129d9] underline ' >Log in with phone number</a></p>

    </div>
     </div>
    <div className=" h-[870px] w-1/2 bg-[#e9c0e9]"> 
    <Image
            src={side1}
            alt="Linktree Logo"
            style={{ objectFit: "cover" }}
          />
    </div>
    </div>
  )
}

export default Login