import { Building2, Check, ChevronDown, ChevronUp, Languages, NotebookText, ScrollText, Users } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import LanguageDrop from './LanguageDrop'
import { AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import MobileMenuDropChild from './MobileMenuDropChild'

const MobileMenuDrop = () => {
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
        className='absolute translate-y-5 top-full right-0 flex flex-col w-[15rem] gap-5 border shadow bg-white py-4 px-5 pointer-events-auto'
    >
        <MobileMenuDropChild
            logo ={ <Building2/>}
            title = "Company"
            items = {['About', 'History', 'Join the team', 'Blog', 'Press', 'Contact us', 'Help Center']}
        />
        <MobileMenuDropChild
            logo ={ <NotebookText/>}
            title = "Product"
            items = {['Developer/API', 'Unsplash Dataset', 'Unsplash for IOS', 'Apps & Plugins', 'Unsplash Studio']}
        />
        <MobileMenuDropChild
            logo ={ <Users/>}
            title = "Community"
            items = {['Become a Contributor', 'Topics', 'Collections', 'Trend', 'Unsplash Awards', 'Stats']}
        />
        <MobileMenuDropChild
            logo ={ <ScrollText/>}
            title = "Legal"
            items = {['License', 'Privacy Policy', 'Terms', 'Security']}
        />
        <MobileMenuDropChild
            logo ={ <Languages/>}
            title = "Language"
            items = {['Deutsch', 'English', 'Espanol', 'Francaise', 'Italiano', 'Chinese', 'Japanese', 'Portuges']}
        />
    </div>
  )
}

export default MobileMenuDrop
