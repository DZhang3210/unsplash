
import { Pen, User } from 'lucide-react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <div className='max-w-3xl flex mx-auto gap-6 justify-center items-start'>
      <div 
          className='relative rounded-full bg-gray-200'
          id = "profile-drop"
        >
          <User 
            className='text-gray-400'
            height = {150}
            width = {150}
          />
      </div>
      <div className='flex flex-col gap-4 pt-4'>
        <div className='flex flex-row gap-4 justify-start items-center'>
          <div className='text-5xl font-bold'>
            David Zhang
          </div>
          <button className='text-gray-500 flex gap-1 items-center justify-center border rounded-lg text-sm px-2 py-1 transition hover:border-black hover:text-black'>
            <Pen
              size = {20}
            />
            <span className='text-sm'>Edit profile</span>
          </button>
        </div>
        <div className='text-gray-500 text-sm'>
          Download free, beautiful high-quality photos curated by David.
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
