import { Calendar, ChevronDown, Download, Eye, Star } from 'lucide-react'
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'

const ProfileBody = () => {

  return (
    <div className='flex flex-col w-full px-5 py-10 md:px-20 gap-10 mb-20'>
      <div className=''>
        <div className='flex gap-5 items-center pb-4'>
          <div className='text-2xl font-bold'>
            Insights
          </div>
          <div className='text-gray-500 flex text-sm items-center cursor-pointer transition hover:text-black'>
            <div>Last 30 days</div>
            <ChevronDown/>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-1 gap-10'>
          <div className='w-full border rounded-lg'>
            <div className='px-5 py-5'>
              <div className='text-md font-semibold'>
                Views
              </div>
              <div className='text-3xl font-bold'>
                0
              </div>
            </div>
            <hr
              className='w-full mt-52 mb-5 h-[4px] bg-green-400'
            />
            <div className='px-5 pb-2 text-gray-600'>
              Most viewed on
            </div>
            <div className='relative grid grid-cols-6 grid-rows-2 gap-4 py-4 px-2'>
              <Skeleton className= "col-span-3 w-full"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "col-span-3 h-full w-full"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <div className='absolute inset-0 flex justify-center items-center text-sm sm:text-lg'>
                Nothing to report so far
              </div>
            </div>
          </div>
          <div className='w-full border rounded-lg'>
            <div className='px-5 py-5'>
              <div className='text-md font-semibold'>
                Downloads
              </div>
              <div className='text-3xl font-bold'>
                0
              </div>
            </div>
            <hr
              className='w-full mt-52 mb-5 h-[4px] bg-green-400'
            />
            <div className='px-5 pb-2 text-gray-600'>
              Most downloaded on
            </div>
            <div className='relative grid grid-cols-6 grid-rows-2 p-4 gap-4'>
              <Skeleton className= "col-span-3 w-full"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "col-span-3 h-full w-full"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <Skeleton className= "cols-span-1 w-full aspect-square"/>
              <div className='absolute inset-0 flex justify-center items-center text-sm sm:text-lg'>
                Nothing to report so far
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-5 items-center pb-4'>
        <div className='text-2xl font-bold'>
          Uses
        </div>
        <div className='text-gray-500 flex text-sm items-center cursor-pointer transition hover:text-black'>
          <div>Show Highlights</div>
          <ChevronDown/>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10'>
        <div className='w-full border rounded-lg flex justify-center items-center text-lg h-[40rem]'>
          Nothing to report so far
        </div>
        <div className='w-full flex flex-col mb-80 md:mb-0 md:grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4  h-[40rem]'>
          {
            [[<Calendar size ={30}/>,'First upload', 'Upload your first image', 'bg-red-400'],
              [<Star size ={30}/>, 'First upload', 'Reach 5 featured photos on the editorial feed', 'bg-yellow-400'],
              [<Eye size ={30}/>, 'Views', 'Reach 100k views', 'bg-blue-400'],
              [<Download size ={30}/>, 'Downloads', 'Reach 500k downloads', 'bg-green-400'],
            ].map(([logo, title, desc, color], i) =>(
                <div className='relative border rounded-lg flex flex-col justify-center items-center gap-1 px-3 text-center w-full py-10' key = {i}>
                    <div className={'p-8 rounded-full ' + color}>
                      {logo}
                    </div>
                    <div className='text-lg font-bold'>{title}</div>
                    <div className='text-sm text-gray-500'>{desc}</div>
                    <div
                      className='absolute w-full h-full bg-black/10 pointer-events-none'
                    />
                </div>
            ))
          }
        </div>
      </div>


      <div className='flex flex-col gap-10'>
        <div className='flex gap-5 items-center pb-4'>
          <div className='text-2xl font-bold'>
            Your Images
          </div>
          <div className='text-gray-500 flex text-sm items-center cursor-pointer transition hover:text-black'>
            <div>Sort by Views</div>
            <ChevronDown/>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <Image
            src = "/sad-display.avif"
            alt = "sad-display"
            width = {720}
            height = {540}
            className='max-w-sm'
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <Image
            src = "/unsplash-logo.webp"
            alt = "sad-display"
            width = {60}
            height = {60}
            className='max-w-[1]'
          />
          <div className='text-gray-600'>
            Make something awesome
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBody
