import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center bg-gray-100 text-[#828282] px-5'>
        <div className='flex justify-center items-start gap-x-52 mt-14 tablet:gap-x-20 mobile:justify-between mobile:px-2 mobile:gap-x-0'>
          <div className='flex flex-col justify-center items-start w-[30%] gap-y-1 mobile:w-[50%]'>
            <h3 className='text-xl font-semibold text-black mobile:text-lg'>Collections</h3>
            <Link className='text-lg mobile:text-base mt-3' href={"/collections/clothing"}>Clothing</Link>
            <Link className='text-lg mobile:text-base' href={"/collections/electronics"}>Electronics</Link>
            <Link className='text-lg mobile:text-base' href={"/collections/clothing"}>Clothing</Link>
          </div>
          <div className='flex flex-col justify-center items-start w-[30%] gap-y-1 mobile:hidden'>
            <h3 className='text-xl font-semibold text-black'>Info</h3>
            <Link className='text-lg mt-3' href={"/about"}>About Us</Link>
            <Link className='text-lg' href={"/contact"}>Contact Us</Link>
          </div>
          <div className='flex flex-col justify-center items-start w-[45%] gap-y-4 mobile:w-[50%]'>
            <h3 className='text-xl font-semibold text-black mobile:text-lg'>Our mission</h3>
            <p className='text-lg w-[100%] mobile:text-base'>Quality materials, good designs, craftsmanship and sustainability.</p>
          </div>
        </div>
        <div className='h-[1px] w-full bg-[#c2c2c2] mt-10'></div>
        <div className='mt-5 mb-5'>
          <p>&#169; 2024 Omega Mart. All rights reserved.</p>
        </div>
      </footer>
  )
}

export default Footer