"use client"
import Image from "next/image"
import Logo from '@/assests/icons/SecondaryLogo-Center.svg'
import { Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Card } from "../ui/card"
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <>
    <div className="bg-black text-white text-sm flex h-8 justify-center items-center w-full p-2">We Are Coming Soon <Heart className="text-white h-4"></Heart> </div>
    <nav className=" flex h-14 w-full items-center justify-between p-4 bg-white">
      
        <Image src={Logo} alt="logo" height={40}></Image>
        
        <ul className="flex gap-4 text-md font-bold hover:cursor-pointer">
            <Link href='#howitworks'><li>How it Works</li></Link>
            <Link href='#subscribe'><li>Subscribe</li></Link>
            <Link href='#contact'><li>Contact</li></Link>
        </ul>

    </nav>
    </>
  )
}

export default Navbar