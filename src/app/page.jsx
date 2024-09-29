"use client"
import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react'
import { getSession } from 'next-auth/react';

const Page = () => {
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession()
      console.log(session);
      if(session){
        if (session.user.provider === "github") {
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: session.user.name,
              email: session.user.email,
              password: null,
              provider: session.user.provider
            }),
          });
        }
      }
    }
    fetchSession()
  }, [])

  return (
    <div>
      <button onClick={() => signOut()}>sign out</button>
      Main page where user can chat with the chatbot. Both options will be available here. You can use a button for uploading document and there will be a dropdown menu which will have three options 1-LLM 2-RAG 3-Both. You can customize the design as you wish.
    </div>
  )
}

export default Page