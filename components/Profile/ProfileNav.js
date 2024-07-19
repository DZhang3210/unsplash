'use client'
import { BarChart, Folder, Heart, Image as ImageIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const ProfileNav = () => {
  const [profileNavChosen, setProfileNavChosen] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('hello')
        setIsSticky(entry.intersectionRatio < 1)
      },
      { threshold: [1] }
    )

    if (stickyRef.current) {
      observer.observe(stickyRef.current)
    }

    return () => {
      if (stickyRef.current) {
        observer.unobserve(stickyRef.current)
      }
    }
  }, [stickyRef])

  return (
    <div 
      ref={stickyRef}
      className={`sticky top-10 w-full flex flex-col justify-center items-start py-4 px-2 ${isSticky ? 'bg-gray-100 shadow-md' : 'bg-transparent'}`}
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
        {isSticky && 
        <div>
          Sticky
        </div>
        }
        
      </div>
      <hr className='w-full bg-black' />
    </div>
  )
}

export default ProfileNav
