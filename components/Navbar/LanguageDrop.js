import { Check } from 'lucide-react'
import React, { useState } from 'react'

const LanguageDrop = () => {
  const [language, setLanguage] = useState(0)
  return (
    <div 
        className='flex flex-col absolute bottom-full right-0 rounded-lg shadow-lg border bg-white w-44 items-start pt-4 pointer-events-auto'
    >
        <div className='text-start px-2 text-sm text-black font-semibold'>Select Your Language</div>
        {
            ['Deutsch', 'English', 'Espanol', 'Francaise', 'Italiano', 'Chinese', 'Japanese', 'Portuges'].map((item,i)=>(
                <div key = {i} className={'transition px-4 py-2 text-gray-500 w-full text-start flex gap-2 items-center ' + (language !== i ? 'hover:bg-gray-300 cursor-pointer':'')}>
                    {(language === i) && <Check size={15} className='text-black'/>}
                    <span>{item}</span>
                </div>
            ))
        }
    </div>
  )
}

export default LanguageDrop
