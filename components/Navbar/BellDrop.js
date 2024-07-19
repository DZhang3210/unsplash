import React, { useState } from 'react'


const BellDrop = () => {
  const [option, chooseOption] = useState(0)
  return (
    <div 
        className='absolute translate-y-5 top-full rounded-lg right-0 flex flex-col w-[22rem] border shadow bg-white pointer-events-auto text-sm py-2 text-gray-600'
    > 
      <div className='grid grid-cols-2'>
        <div 
            className={'flex justify-center items-center w-full h-full border-b-2 transition py-2 rounded-sm cursor-pointer ' + (option === 0 ? 'border-black' : '')}
            onClick = {()=>{
                chooseOption(0)
            }}
        >
            Activity
        </div>
        <div 
            className={'flex justify-center items-center w-full h-full border-b-2 transition py-2 rounded-sm cursor-pointer ' + (option === 1 ? 'border-black' : '')}
            onClick = {()=>{
                chooseOption(1)
            }}
        >
            Highlights
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-[20rem] text-center'>
        <span className='max-w-[200px]'>
            {option === 0 ? 'Activity associated with your account will appear here.' : 'Important news, product updates, and milestones associated with your account will appear here.'}
        </span>
      </div>
    </div>
  )
}

export default BellDrop
