import React from 'react'

const ProfileDrop = () => {
  return (
    <div 
        className='absolute translate-y-5 top-full rounded-lg right-0 flex flex-col w-[12rem] border shadow bg-white pointer-events-auto text-sm py-2 text-gray-600'
    >   
        {
            ['View profile', 'Stats', 'Download history', 'Account settings'].map((item, i)=>(
                <div key = {i} className='cursor-pointer transition hover:bg-gray-100 h-full w-full px-2 py-2'>
                    {item}
                </div>
            ))
        }

        <hr className='my-2'/>

        <div className='cursor-pointer transition hover:bg-gray-100 h-full w-full px-2 py-2'>
            Logout @ethoeto
        </div>
    </div>
  )
}

export default ProfileDrop
