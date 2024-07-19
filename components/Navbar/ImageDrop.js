import { Link } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ImageDrop = () => {
  const [pasteImage, setPasteImage] = useState(false)
  useEffect(()=>{
    const handleClickOutside = (event) => {
        const pasteSearch = document.getElementById('paste-input')
        if (pasteSearch && !pasteSearch.contains(event.target)){
            setPasteImage(false)
        }
    }
    document.addEventListener('click', handleClickOutside);
    })
  return (
    <div 
        className='absolute translate-y-5 top-full right-0 flex flex-col w-[40rem] border shadow bg-white pt-8 px-5 pointer-events-auto'
    >
      <div className='flex justify-between text-md'>
        <div>Visual Search</div>
        <div className='text-gray-500 underline text-sm cursor-pointer'>Need help?</div>
      </div>
      <div className='w-full aspect-video border-4 border-dotted my-2 flex flex-col gap-6 items-center justify-center'>
        <Image
            src = "/images/imagePlaceholder.avif"
            alt = "image-placeholder"
            height = {89}
            width = {118}
            
        />
        <div className='text-xl max-w-md text-center font-semibold'>
            Drag and drop your image here or <span className='text-blue-600 cursor-pointer'>Browse</span> to choose a file
        </div>
        <div className='text-sm'>
            or
        </div>
        <div 
            className= {'rounded-full transition gap-3 flex items-center px-4 py-2 ' + (pasteImage ? 'bg-gray-50' : 'bg-gray-200')}
            id = "paste-input"
        >
            <Link
                className='text-gray-700'
            />
            <input
                type = "text"
                placeholder='Paste an image or URL'
                className='bg-transparent outline-none grow'
                onFocus={()=>{setPasteImage(true)}}
            /> 
        </div>
      </div>
      <div className='flex flex-col items-center py-5 gap-5'>
        <div className='text-gray-600 text-xs'>
            Or try one of the examples below:
        </div>
        <div className='flex justify-center gap-2'>
            {
                [1,2,3,4].map((index, i)=>(
                    <Image
                        src = {"/images/imagePlaceholder" + index + '.avif'}
                        alt = "placeholder-image"
                        width = {82}
                        height = {56}
                        key = {i}
                        className='rounded-lg'
                    />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default ImageDrop
