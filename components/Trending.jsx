import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'

const Trending = ({result}) => {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className='space-y-0.5'>
        <p className='text-[#6e767d] text-xs font-medium'>{/*} {result.heading} */} Heading</p>
        <h6 className='font-bold max-w-[250px] text-sm'>{/* {result.description} */} Description</h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          {/* {result.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))} */}
          <span>Tags</span>
        </p>
      </div>
      {/* {result.img ? (
        <Image
        src={result.img}
        width={70}
        height={70}
        objectFit="cover"
        className="rounded-2xl"
      />
      ) : (
        <div className="icon group">
          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )} */}
      <div className="icon group">
          <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
    </div>
  )
}

export default Trending