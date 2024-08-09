"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/assets/linktree.png";

const Navbar = () => {
  return (
    <div className="w-full md:w-[1200px] h-[90px] bg-white rounded-full m-4 md:m-9 font- fixed z-50">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="flex items-center">
          <a href="#" className="m-4 rounded-lg">
            <Image
              src={logo}
              alt="Linktree Logo"
              height={40}
              width={40}
              style={{ objectFit: "cover" }}
            />
          </a>
          <div className="hidden md:flex m text-[#676b5f]">
            <a href="#" className="h-[42px] w-[100px] mt-1 rounded-lg hover:bg-gray-100 flex items-center justify-center">
              Templates
            </a>
            <a href="#" className="h-[42px] w-[100px] mt-1 rounded-lg hover:bg-gray-100 flex items-center justify-center">
              Marketplace
            </a>
            <a href="#" className="h-[42px] w-[100px] mt-1 rounded-lg hover:bg-gray-100 flex items-center justify-center">
              Discovery
            </a>
            <a href="#" className="h-[42px] w-[70px] mt-1 rounded-lg hover:bg-gray-100 flex items-center justify-center">
              Pricing
            </a>
            <a href="#" className="h-[42px] w-[60px] mt-1 rounded-lg hover:bg-gray-100 flex items-center justify-center">
              Learn
            </a>
          </div>
        </div>
        <div className="flex justify-end m-3">
        <Button className="w-[100px] h-[42px] md:h-[62px] mr-2 text-[14px] md:text-[16px] bg-[#eff0ec] text-black hover:bg-gray-100">
            <a href="login" >Log in </a>
          </Button>
          <Button className="w-[120px] md:w-[152px] h-[42px] md:h-[62px] rounded-full text-[14px] md:text-[16px]">
            <a href="register" >Sign up free</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
