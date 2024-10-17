import React from 'react'

const Page = ({params}:any) => {
  return (
    <div className='text-5xl font-extrabold'>Products of Collection {params.collection}</div>
  )
}

export default Page