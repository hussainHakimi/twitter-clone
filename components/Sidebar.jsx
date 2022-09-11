import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className='text-white hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full bg-gray-800'>
      <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
        <Image src='https://rb.gy/ogau5a' width={30} height={30}/>
      </div>
      <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className='bg-[#1d9bf0] w-56 h-[52px] text-lg shadow-md hover:bg-[#1a8cd8] rounded-full text-center font-bold text-white hidden xl:inline  ml-auto'>Tweet</button>
      <div className='flex space-x-5 ml-auto hoverAnimation text-[#9d9d9d] items-center justify-center mt-auto xl:ml-auto xl:-mr-5'>
        <Image src='/unnamed.png' width={40} height={40} className='rounded-full xl:mr-2.5  ' alt=''/>
        <div className=' hidden xl:inline leading-5'>
          <h4 className='font-bold'>Hussain Hakimi</h4>
          <span className='text-[#6e767d] font-bold'>Front-End Developer</span>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default Sidebar