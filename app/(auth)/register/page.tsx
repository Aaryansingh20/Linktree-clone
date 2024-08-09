"use client";
import React from 'react'
import side2 from "@/public/assets/register.png"
import Image from "next/image";
import logoicon from "@/public/assets/linktree-logo.png"
import google from "@/public/google (1).png"
import apple from "@/public/apple-logo.png"
import { Input  } from '@/components/ui/input';
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const Register = () => {
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
          <h1 className="font-bold text-5xl text-center">Join Linktree</h1>
          <p className=" text-center text-lg pt-5 text-[#84877e] " >sign up for free!</p>
      </div>
      
      <div className="m-20">
        <Input placeholder='Email' type='email' className="  w-[475px] h-[48px] bg-[#f6f7f5] "/><br/>
        <Input placeholder='Password' type='password' className="  w-[475px] h-[48px] bg-[#f6f7f5] "/>
        <Link href="/" >
        <Button className="  w-[475px] h-[48px] text-lg text-[#94978e] bg-[#e0e2d9] hover:bg-[#8129d9] hover:text-white rounded-full mt-10">Create account</Button>
        </Link>
        <p className='text-center mt-5 text-[#84877e] '>By clicking <a className='text-black'>Create account</a>, you agree to Linktree privacy notice, T&Cs and to receive offers, news and updates.</p>
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
         
          <p className='text-center m-10 text-[#84877e]'>already have an account?<a href='login' className='text-[#8129d9]' >Log in</a></p>
          <p className=" text-[10px] pb-10 text-[#84877e]">cookie preferences</p>

      </div>
       </div>
      <div className=" h-[870px] w-1/2 bg-[#d5a334]"> 
      <Image
              src={side2}
              alt="Linktree Logo"
              style={{ objectFit: "cover" }}
            />
      </div>
      </div>
  )
}

export default Register