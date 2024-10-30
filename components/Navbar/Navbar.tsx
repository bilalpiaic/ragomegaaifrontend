"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { LuUser } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbLogin2 } from "react-icons/tb";
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { RiHome2Line } from "react-icons/ri";
import { RiContactsBook3Line } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getSession, signOut } from 'next-auth/react';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    let showSidebar = () => {
      setSidebar(true);
    }
    let hideSidebar = () => {
      setSidebar(false);
    }

    const [session, setSession] = useState<any>(null)

    useEffect(()=>{
      const fetchSession = async()=>{
        const temp = await getSession()
        console.log(temp);
        
        setSession(temp)
      }
      fetchSession()
    },[])

  return (
    <header>
        <nav className='flex justify-between px-32 items-center h-20 bg-white fixed top-0 right-0 left-0 z-10 shadow-md tablet:px-4 w-screen mobile:px-3'>
          <div>
            <h1 className='text-2xl font-bold'>Omega Mart</h1>
          </div>
          <div className='flex justify-center items-center gap-x-12 text-lg font-semibold mobile tablet:gap-x-5'>
            <Link className='font-medium text-[#3b3a3a] mobile:hidden' href={"/"}>Home</Link>
            <Link className='font-medium text-[#3b3a3a] mobile:hidden' href={"/about"}>About</Link>
            <Link className='font-medium text-[#3b3a3a] mobile:hidden' href={"/contact"}>Contact</Link>
            <div className='flex justify-center items-center gap-x-4'>
              <div style={{display: session ? "":"none"}} className='mobile:hidden'>
                <DropdownMenu>
                  <DropdownMenuTrigger><LuUser className='text-[26px] relative top-[4px] left-[3px]' /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link style={{display: session ? "none":""}} href={"/login"}><TbLogin2 className='text-[30.5px] cursor-pointer mobile:hidden' /></Link>
              <Link style={{display: session ? "":"none"}} href={"/cart"}><HiOutlineShoppingBag className='text-[27px] cursor-pointer' /></Link>
              <FaBars onClick={showSidebar} className="text-2xl hidden mobile:block cursor-pointer" />
            </div>
          </div>
        </nav>
        <nav style={{ transform: sidebar ? "translateX(0%)" : "translateX(100%)" }} id="sidebar" className="flex flex-col items-start px-5 bg-pink fixed top-0 right-0 h-[100vh] w-[100vw] text-lg font-bold transition-all ease-in-out duration-300 z-10 bg-white">
          <RxCross2 onClick={hideSidebar} className="mobile:mt-6 tablet:mt-12 absolute right-3 tablet:right-8 text-4xl cursor-pointer hover:scale-[1.2] transition-transform ease-in-out duration-150" />
          <div className='flex flex-col gap-y-52'>
            <div>
              <div onClick={hideSidebar} className="py-1 mt-20"><Link className='flex items-center gap-x-2' href="/"><RiHome2Line />Home</Link></div>
              <div onClick={hideSidebar} className="py-1"><Link className='flex items-center gap-x-2' href="/about"><HiOutlineDocument />About</Link></div>
              <div onClick={hideSidebar} className="py-1"><Link className='flex items-center gap-x-2' href="/contact"><RiContactsBook3Line />Contact</Link></div>
            </div>
            <div>
              <div style={{display: session ? "none":""}}>
                <div onClick={hideSidebar} className="py-1"><Link className='flex items-center gap-x-2' href={"/login"}><TbLogin2 />Login</Link></div>
              </div>
              <div style={{display: session ? "":"none"}}>
                <div onClick={hideSidebar} className="py-1"><Link className='flex items-center gap-x-2' href="/"><LuUser />Profile</Link></div>
                <div onClick={hideSidebar} className="py-1"><Link className='flex items-center gap-x-2' href="/"><FiShoppingBag />Orders</Link></div>
                <div onClick={()=>signOut()} className="py-1"><Link className='flex items-center gap-x-2' href="/"><TbLogout2 />Logout</Link></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar