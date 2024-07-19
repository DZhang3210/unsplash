import { Pen, User } from 'lucide-react'
import React from 'react'

const MobileProfileHeader = () => {
  return (
    <div className='flex w-full justify-between px-10'>
      <div className='flex flex-col items-start gap-5'>
        <span 
            className='relative rounded-full bg-gray-200'
            id = "profile-drop"
            >
            <User 
                className='text-gray-400'
                height = {150}
                width = {150}
            />
        </span>
        
        <div className='text-4xl font-bold'>
            David Zhang
        </div>
        <div className='text-gray-500 text-sm'>
          Download free, beautiful high-quality photos curated by David.
        </div>
      </div>
      <div>
        <button className='text-gray-500 gap-1 items-center justify-center border rounded-lg text-sm px-2 py-1 transition hover:border-black hover:text-black hidden sm:flex'>
            <Pen
              size = {20}
            />
            <span className='text-sm'>Edit profile</span>
        </button>
      </div>
    </div>
  )
}

export default MobileProfileHeader
