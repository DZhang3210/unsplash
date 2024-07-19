'use client'
import { BarChart, Folder, Heart, Image as ImageIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const ProfileNav = () => {
  const [profileNavChosen, setProfileNavChosen] = useState(0)

  return (
    <div 
      className='sticky top-16 w-full flex flex-col justify-center items-start py-4 px-2 bg-white z-100'
      id="profile-nav"
    >
      <div className='flex gap-1 justify-start'>
        {[
          [<ImageIcon />, 'Photos'],
          [<Heart />, 'Likes'],
          [<Folder />, 'Collections'],
          [<BarChart />, 'Stats']].map(([logo, title], i) => (
            <div
              className={'ml-4 py-2 flex gap-1 border-b-[1px] transition cursor-pointer items-center text-gray-500 hover:text-black ' + (profileNavChosen === i ? 'border-black' : '')}
              onClick={() => { setProfileNavChosen(i) }}
              key={i}
            >
              <div>
                {logo}
              </div>
              <div className='text-xs md:text-sm lg:text-md'>
                {title}
              </div>
            </div>
          ))
        }
        
      </div>
      <hr className='w-full bg-black' />
    </div>
  )
}

export default ProfileNav
