'use client'
import { BarChart, Folder, Heart, Image } from 'lucide-react'
import React, { useState } from 'react'

const ProfileNav = () => {
  const [profileNavChosen, setProfileNavChosen] = useState(0)
  return (
    <div className='sticky top-10 w-full flex flex-col justify-center items-start py-4 px-2'>
      <div className='flex gap-1 justify-start'>
        {[
          [<Image/>,'Photos'], 
          [<Heart/>,'Likes'], 
          [<Folder/>,'Collections'], 
          [<BarChart/>,'Stats']].map(([logo, title], i) =>(
            <div 
              className={'pl-4 py-2 flex gap-1 border-b-[1px] transition cursor-pointer border-transparent items-center text-gray-500 hover:text-black' + (profileNavChosen === i ? 'border-black': '')} 
              onClick = {()=>{setProfileNavChosen(i)}}
              key ={i}
            >
              <div>
                {logo}
              </div>
              <div className='text-xs md:text-sm lg:text-lg'>
                {title}
              </div>
            </div>
          ))
          
          }
      </div>
      <hr className='w-full  bg-black'/>
    </div>
  )
}

export default ProfileNav
