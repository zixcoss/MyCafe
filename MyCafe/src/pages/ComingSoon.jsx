import React from 'react'
import { Link } from 'react-router'

const ComingSoon = () => {
  return (
    <div className='flex flex-col gap-4 justify-center h-screen w-[50%] mx-auto text-center font-roboto animate-fade
        max-md:w-[90%]'>
      <p className='text-4xl font-extrabold text-gray-400'>COMING SOON</p>
      <p>
        Sorry, this feature is coming soon. You can find plenty of other things on our <Link to="/" className='text-blue-400 cursor-pointer'>homepage</Link>
      </p>
    </div>
  )
}

export default ComingSoon