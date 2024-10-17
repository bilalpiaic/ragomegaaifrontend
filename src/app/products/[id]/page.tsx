import React from 'react'

const Page = ({params}:any) => {
  return (
    <div className='text-5xl font-extrabold'>Product {params.id}</div>
  )
}

export default Page