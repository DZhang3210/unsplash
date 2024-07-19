import React from 'react'

const SearchDrop = () => {
  return (
    <div 
        className='absolute translate-y-5 top-full rounded-lg right-0 flex flex-col w-full border shadow bg-white pointer-events-auto text-sm py-4 text-gray-600 gap-3 px-5'
    > 
      <div className='text-black font-semibold'>
        Trending Search
      </div>
      <div className='flex gap-2'>
        {
            ["1", "2", "3"].map((item, i) => (
                <div className='px-4 py-1 rounded-md bg-gray-200 transition hover:bg-gray-300 cursor-pointer' key = {i}>
                    {item}
                </div>
            ))
        }
      </div>
      <div className='text-black font-semibold'>
        Trending Topics
      </div>
      <div className='flex gap-2'>
        {
            ["1", "2", "3"].map((item, i) => (
                <div className='px-4 py-1 rounded-md bg-gray-200' key = {i}>
                    {item}
                </div>
            ))
        }
      </div>
      <div className='text-black font-semibold'>
        Trending Collections
      </div>
      <div className='flex gap-2'>
        {
            ["1", "2", "3"].map((item, i) => (
                <div className='px-4 py-1 rounded-md bg-gray-200' key = {i}>
                    {item}
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default SearchDrop
