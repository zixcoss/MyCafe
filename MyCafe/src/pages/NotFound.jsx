import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-4 justify-center h-screen w-[50%] mx-auto text-center font-roboto animate-fade
        max-md:w-[90%]'>
      <p className='text-5xl font-extrabold text-gray-500'>404</p>
      <p className='text-3xl font-extrabold text-gray-400'>Page not found</p>
      <p>
        Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our <Link to="/" className='text-blue-400 cursor-pointer'>homepage</Link>
      </p>
    </div>
  )
}

export default NotFound