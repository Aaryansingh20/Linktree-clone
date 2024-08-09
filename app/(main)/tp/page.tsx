"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
const page =()=>{
  return(
    <main className="flex items-center justify-center min-h-screen">

          
            <UserButton />
          
          </main>
  )
}
export default page


