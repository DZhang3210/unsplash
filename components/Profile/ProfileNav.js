import { BarChart } from 'lucide-react'
import React from 'react'

const ProfileNav = () => {
  return (
    <div className='flex flex-col justify-center items-start'>
      <div className='flex gap-2'>
        {[
          ['Photos'], 
          ['Likes'], 
          [<Folder/>,'Collections'], 
          [<BarChart/>,'Stats']]}
      </div>
      <hr/>
    </div>
  )
}

export default ProfileNav
