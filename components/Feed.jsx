import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import Input from './Input'

const Feed = () => {
  return (
    <div className='text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]'>
      <div className='flex justify-between items-center h-[50px] px-5 border-b text-[#9d9d9d] sticky top-0 z-50 border-gray-700'>
        <h4 className='font-bold text-lg sm:text-xl'>Home</h4>
        <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
          <SparklesIcon className='h-5 text-white'/>
        </div>
      </div>
      <Input/>
    </div>
  )
}

export default Feed