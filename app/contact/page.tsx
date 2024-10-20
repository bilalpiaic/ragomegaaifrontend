"use client"
import React, { useState } from 'react'

const Page = () => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    })

    const onClickHandler = ()=>{
        // Database updating code
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-gray-100 px-4 py-28'>
                <div className='text-gray-900 text-5xl font-bold mb-16 mt-10'>Contact Us</div>
                <div className='mb-4 w-full max-w-lg'>
                    <input
                    onChange={(e:any)=>{setMessage({...message, [e.target.name]: e.target.value})}}
                        className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200'
                        type="text"
                        name='name'
                        value={message.name}
                        placeholder="Name"
                        aria-label="Username" // Added aria-label for accessibility
                        required // Mark as required
                    />
                </div>
                <div className='mb-4 w-full max-w-lg'>
                    <input
                    onChange={(e:any)=>{setMessage({...message, [e.target.name]: e.target.value})}}
                        className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200'
                        type="email"
                        name='email'
                        value={message.email}
                        placeholder="Email"
                        aria-label="Email address" // Added aria-label for accessibility
                        required // Mark as required
                    />
                </div>
                <div className='mb-4 w-full max-w-lg'>
                    <input
                    onChange={(e:any)=>{setMessage({...message, [e.target.name]: e.target.value})}}
                        className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200'
                        type="text"
                        name='phoneNumber'
                        value={message.phoneNumber}
                        placeholder="Phone Number"
                        aria-label="Password" // Added aria-label for accessibility
                        required // Mark as required
                    />
                </div>
                <div className='mb-4 w-full max-w-lg'>
                    <textarea
                    onChange={(e:any)=>{setMessage({...message, [e.target.name]: e.target.value})}}
                        className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200 h-40'
                        placeholder="Message"
                        name='message'
                        value={message.message}
                        aria-label="Email address" // Added aria-label for accessibility
                        required // Mark as required
                    />
                </div>
                <button onClick={onClickHandler} className='bg-black text-white px-4 py-3 w-40 max-w-xs rounded-sm duration-300 hover:scale-105'>
                    Submit
                </button>
            </div>
            <div className='h-[1px] w-full bg-[#c2c2c2]'></div>
        </div>
    )
}

export default Page