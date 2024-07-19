import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const MobileMenuDropChild = ({logo, title, items}) => {
  const [mobileMenuDrop, setMobileMenuDrop] = useState(false)
  return (
    <div className='flex flex-row gap-3 w-full'>
        <div>
            {logo}
        </div>
        <div className='grow'>
            <div 
                className='flex justify-between cursor-pointer items-center'
                onClick = {() => {setMobileMenuDrop(prev => !prev)}}
            >
                <h1 className='font-semibold text-black'>{title}</h1>
                <ChevronUp 
                    className= {'transition ' + (mobileMenuDrop ? '-rotate-180':'')}
                />
            </div>
            {
                mobileMenuDrop && 
                items.map((item, i)=>(
                    <div key={i} className='py-1 text-sm text-gray-500 hover:text-black transition cursor-pointer'>
                        {item} 
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MobileMenuDropChild
