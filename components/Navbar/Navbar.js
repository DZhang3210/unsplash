'use client'
import { Bell, Menu, ScanBarcode, Search, User } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MenuDrop from './MenuDrop'
import { AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import ProfileDrop from './ProfileDrop'
import BellDrop from './BellDrop'
import SearchDrop from './SearchDrop'
import ImageDrop from './ImageDrop'

const Navbar = () => {
  const [menuTrigger, setMenuTrigger] = useState(false)
  const [profileTrigger, setProfileTrigger] = useState(false)
  const [bellTrigger, setBellTrigger] = useState(false)
  const [imageTrigger, setImageTrigger] = useState(false)
  const [searchTrigger, setSearchTrigger] = useState(false)
  useEffect(()=>{
    const handleClickOutside = (event) => {
      const menuDrop = document.getElementById('menu-drop')
      const profileDrop = document.getElementById('profile-drop')
      const bellDrop = document.getElementById('bell-drop')
      const searchDrop = document.getElementById('search-drop')
      const imageDrop = document.getElementById('image-drop')
      // const isMenuDrop = menuDrop.contains(event.target);
      if (searchDrop && !searchDrop.contains(event.target)){
        setSearchTrigger(false)
      }
      if (imageDrop && !imageDrop.contains(event.target)){
        setImageTrigger(false)
      }
      if (bellDrop && !bellDrop.contains(event.target)){
        setBellTrigger(false)
      }
      if (profileDrop && !profileDrop.contains(event.target)){
        setProfileTrigger(false)
      }
      if (menuDrop && !menuDrop.contains(event.target)) {
        setMenuTrigger(false); // Assuming setMenuTrigger is a function you have defined
        // console.log('Clicked outside menuDrop. Set to false.');
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  },[])
  
  return (
    <div className='fixed w-full h-[2rem] flex mt-4 px-4 gap-4 items-center'>
      <button className=''>
        <Image
          src = "/unsplash-logo.webp"
          alt = "unsplash-logo"
          height = {40}
          width = {40}
        />
      </button>
      <div 
        className={'relative flex rounded-full grow justify-between border px-3 items-center transition ' + (searchTrigger ? 'bg-white/50' : 'bg-gray-200/50' )}
        id = "search-drop"
      >
        <div className='flex grow gap-2 py-2'>
          <Search
            className='cursor-pointer'
            onClick = {()=>{ setSearchTrigger(true)}}
          />
          <input
            type = "text"
            placeholder = "Search photos and illustrations"
            className='bg-transparent outline-none grow placeholder:text-sm'
            onFocus = {()=>{ setSearchTrigger(true)}}
          />
        </div>
        <ScanBarcode
          onClick = {()=> {setImageTrigger(prev=>!prev)}}
          className='cursor-pointer'
        />
        {
          imageTrigger && <ImageDrop/>
        }      
        {
          searchTrigger && <SearchDrop/>
        }
      </div>
      <button className='text-sm transition text-gray-500 hover:text-black'>
        Get Unsplash+
      </button>
      <button className='border rounded-lg shadow-md py-1 px-1 text-sm text-gray-600 hover:border-gray-700 transition hover:text-black'>
        Submit an image
      </button>
      <div 
        className='relative'
        id = "bell-drop"
      >
        <Bell
          className='text-gray-400 cursor-pointer transition hover:text-gray-500'
          onClick={()=>{setBellTrigger(prev => !prev)}}
        />
        <AnimatePresence>
          {
            bellTrigger && <FadeIn><BellDrop/></FadeIn>
          }
        </AnimatePresence>

      </div>
      <div 
        className='relative rounded-full bg-gray-200'
        id = "profile-drop"
      >
        <User 
          className='text-gray-400 cursor-pointer'
          onClick={()=>{setProfileTrigger(prev => !prev)}}
          height = {35}
          width = {35}
        />
  
        <AnimatePresence>
          {
            profileTrigger && <FadeIn><ProfileDrop/></FadeIn>
          }
        </AnimatePresence>
      </div>
      <div 
        className='relative'
        id = "menu-drop"
      >
        <Menu 
          onClick={()=>{setMenuTrigger(prev => !prev)}}
          className='cursor-pointer'
        />
        <AnimatePresence>
          {menuTrigger && <FadeIn><MenuDrop/></FadeIn>}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
