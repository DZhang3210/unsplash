import { Building2, Check, ChevronDown, ChevronUp, NotebookText, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import LanguageDrop from './LanguageDrop'
import { AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const MenuDrop = () => {
  const [languageDrop, setLanguageDrop] = useState(false)
  useEffect(()=>{
    const handleClickOutside = (event) => {
      const languageD = document.getElementById('language-drop')
      // const isMenuDrop = menuDrop.contains(event.target);
      if (languageD && !languageD.contains(event.target)) {
        setLanguageDrop(false); // Assuming setMenuTrigger is a function you have defined
          console.log('Clicked outside langDrop. Set to false.');
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  },[])
  return (
    <div 
        className='absolute translate-y-5 top-full right-0 flex flex-col w-[40rem] gap-5 border shadow bg-white pt-8 px-5 pointer-events-auto'
    >
        <div className='grid grid-cols-12'>
            <div>
                <Building2/>
            </div>
            <div className='col-span-3 flex flex-col items-start gap-4 text-gray-500 text-sm'>
                <div className='font-semibold text-black'>
                    Company
                </div>
                {
                    ['About', 'History', 'Join the team', 'Blog', 'Press', 'Contact us', 'Help Center'].map((item, i) => (
                        <button key = {i} className='transition hover:text-black'>
                            {item}
                        </button>
                    ))
                }
            </div>
            <div>
                <NotebookText/>
            </div>
            <div className='col-span-3 flex flex-col gap-4 text-gray-500 items-start text-sm'>
            <div className='font-semibold text-black'>
                Product
                </div>
                {
                    ['Developer/API', 'Unsplash Dataset', 'Unsplash for IOS', 'Apps & Plugins', 'Unsplash Studio'].map((item, i) => (
                        <button key = {i} className='transition hover:text-black'>
                            {item}
                        </button>
                    ))
                }
            </div>
            <div>
                <Users/>
            </div>
            <div className='col-span-3 flex flex-col gap-4 text-gray-500 items-start text-sm'>
                <div className='font-semibold text-black'>
                    Community
                </div>
                {
                    ['Become a Contributor', 'Topics', 'Collections', 'Trend', 'Unsplash Awards', 'Stats'].map((item, i) => (
                        <button key = {i} className='transition hover:text-black'>
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
        <hr/>
        <div className='flex justify-between w-full px-4 mb-4 items-center'>
            <div className='flex gap-2 text-sm text-gray-400'>
                {
                    ['License', 'Privacy Policy', 'Terms', 'Security'].map((item, i)=>(
                        <div
                            key = {i} 
                            className='transition hover:text-black cursor-pointer'>
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className='relative'>
            <button 
                className='text-sm text-gray-400 flex transition items-center hover:text-black'
                onClick = {
                    () => {setLanguageDrop(prev => !prev)}
                }
                id = "language-drop"
            >   
                <div>
                    English
                </div>
                <ChevronDown
                    size ={25}
                    className=''
                />
            </button>
                <AnimatePresence>
                {
                    languageDrop && (
                    <FadeIn>
                        <LanguageDrop/>
                    </FadeIn> 
                    )             
                }
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default MenuDrop
