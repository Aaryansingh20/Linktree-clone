'use client';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import flag1 from "@/public/assets/aboriginal-flag.webp"
import flag2 from "@/public/assets/torres-strait-islander-flag.webp"
import apple from "@/public/store/apple.svg"
import google from "@/public/store/googleplay.svg"
import lt from "@/public/store/kt.svg"
import atlas from "@/public/store/@.svg"
import tikto from "@/public/store/tikti.svg"
import insta from "@/public/store/insta.svg"


const Footer = () => {
  return (
    <div className="w-full bg-[#502274] pt-[50px] sm:pt-[100px] pb-[50px] sm:pb-[100px]">
      <div>
        <h1 className="text-center font-extrabold text-3xl sm:text-5xl text-[#e9c0e9]">Jumpstart your corner of <br /> the internet today</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center p-5">
          <Input className='w-[200px] sm:w-[250px] h-[50px] sm:h-[60px] text-[15px] sm:text-[17px] mb-4 sm:mb-0' type="text" placeholder="linktree/yourname" />
          <Button className='w-[180px] sm:w-[200px] h-[50px] sm:h-[60px] sm:ml-3 text-[15px] sm:text-[17px] bg-[#d3e834] hover:bg-[#e1f166] text-black rounded-full' type="submit">Claim your Linktree</Button>
        </div>
      </div>
      <div className="w-full sm:w-[1165px] h-[400px] sm:h-[651px] p-14  bg-white m-auto rounded-xl mt-[50px] sm:mt-[100px]">
        <div className="w-full h-[420px] flex justify-between items-center">
            <div className=" h-[400px] w-[230px ">
                <h1 className="  text-2xl font-bold ">
                Company
                </h1>
                <ul className="flex flex-col justify-evenly pt-5 " >
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > The Linktree Blog</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > Engineer Blog</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Marketplace</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > What's New</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > About</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Press</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Careers</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Link in Bio</a></li>    
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Scoial Good</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Contact</a></li>
                  </ul>
            </div>
            <div className=" h-[400px] w-[230px]  ">
            <div className=" h-[400px] w-[230px ">
                <h1 className="  text-2xl font-bold ">
                Community
                </h1>
                <ul className="flex flex-col justify-evenly pt-5 " >
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > Linktree Enterprise</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > 2023 Creator Report</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > 2023 Creator Report</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Charity</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > What's Trending</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Creator Profile Directory</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Explore Templates</a></li>
                  </ul>
            </div>
            </div>
            <div className=" h-[400px] w-[230px]  ">
            <div className=" h-[400px] w-[230px] ">
                <h1 className="  text-2xl font-bold ">
                Support
                </h1>
                <ul className="flex flex-col justify-evenly pt-5 " >
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > Help Topics</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > Getting Started </a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Linktree Pro</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Features & How-Tos</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > FAQs</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Report a Violation</a></li>
                  </ul>
            </div>
            </div>
            <div className=" h-[400px] w-[230px] ">
            <div className=" h-[400px] w-[230px] ">
                <h1 className="  text-2xl font-bold ">
                    Trust & Legal                  
                </h1>
                <ul className="flex flex-col justify-evenly pt-5 " >
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > Terms & Conditions</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] "> <a href="#" > Private Notice</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Cookie Notice</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Trust Center</a></li>
                  <li className=" pt-3 text-sm  text-[#676b5f] " > <a href="#" > Cookie Preferences</a></li>
                  </ul>
            </div>
            </div>
        </div>
        <div className="w-full h-[85px] mt-7 flex justify-between items-center  ">
            <div>
            <Button className="w-[100px] h-[42px] md:h-[62px] mr-2 text-[14px] md:text-[16px] bg-[#eff0ec] text-black hover:bg-gray-100">
            Log in
          </Button>
          <Button className="w-[140px] md:w-[202px] h-[42px] md:h-[62px] bg-[#d3e834] hover:bg-[#e1f166] text-black rounded-full text-[14px] md:text-[16px]">
            Get started for free
          </Button>
            </div>
            <div className=" g-4 " >
            <Button className="w-[120px] md:w-[152px] h-[42px] mr-3  md:h-[62px] bg-white hover:bg-white border-2 border-gray-100 rounded-full text-[14px] md:text-[16px]">
            <Image
              src={apple}
              alt="Linktree Logo"
             
              style={{ objectFit: "cover" }}
            />
          </Button>
          <Button className="w-[120px] md:w-[152px] h-[42px] mr-3  md:h-[62px] bg-white hover:bg-white border-2 border-gray-100 rounded-full text-[14px] md:text-[16px]">
            <Image
              src={google}
              alt="Linktree Logo"
              style={{ objectFit: "cover" }}
            />
          </Button>
          <Button className="md:h-[62px] md:w-[60px] bg-white hover:bg-white rounded-full mr-3 " >
          <Image
              src={lt}
              alt="Linktree Logo"
              style={{ objectFit: "cover" }}
            />
            </Button>
          <Button className="md:h-[62px] md:w-[60px] bg-white hover:bg-white rounded-full  mr-3 " >
          <Image
              src={atlas}
              alt="Linktree Logo"
              style={{ objectFit: "contain" }}
            />
            </Button>
          <Button className="md:h-[62px] md:w-[60px] bg-white hover:bg-white rounded-full  mr-3 " >
          <Image
              src={tikto}
              alt="Linktree Logo"
              style={{ objectFit: "cover" }}
            />
            </Button>
          <Button className="md:h-[62px] md:w-[60px] hover:bg-white bg-white rounded-full  mr-3 " >
          <Image
              src={insta}
              alt="Linktree Logo"
              height={62}
              width={60}
              style={{ objectFit: "fill" }}
            />
            </Button>
            </div>
        </div>
      </div>
      <div className="w-full sm:w-[1165px] h-[200px] sm:h-[380px] m-auto rounded-[25px] sm:rounded-[50px] mt-6 bg-[#e9c0e9]">
        <h1 className="text-[3rem] sm:text-[10rem] font-bold text-center pt-6 sm:pt-14 text-[#502274]">Linktree</h1>
      </div>
      <div>
        <div className="flex justify-center items-center m-10">
          <div className="w-[80px] sm:w-[100px] h-[50px] sm:h-[66px] bg-white relative">
            <Image
              src={flag1}
              alt="Aboriginal flag"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[80px] sm:w-[100px] h-[50px] sm:h-[66px] bg-white relative ml-5">
            <Image
              src={flag2}
              alt="Torres Strait Islander flag"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-center text-[#e9c0e9] text-[0.9rem] sm:text-[1.1rem] leading-snug sm:leading-relaxed">
          We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of <br/>
          the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721<br/>
          562), 1-9 Sackville St, Collingwood VIC 3066
        </p>
      </div>
    </div>
  )
}

export default Footer;
