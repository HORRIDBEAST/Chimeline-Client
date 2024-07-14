import React from 'react'
import Image from 'next/image'
import { LuMessageSquarePlus } from "react-icons/lu";
import { SiResend } from "react-icons/si";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
const FeedCard:React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-500 p-4 hover:bg-slate-800 transition-all">
    <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-1'>
        <Image src="/avatar.png" alt="user-img" height={50} width={50} />
        </div>
        <div className='col-span-11'>
          <h5 className="text-lg">Pindk Monster</h5>
          
          <p className='mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore animi, atque ducimus hic velit modi, delectus magni reprehenderit ut, nam porro neque itaque.</p>
          <div className='flex justify-between mt-3 text-2xl items-center p-1 w-[80%]' > 
            <div><LuMessageSquarePlus /></div>
            <div><SiResend /></div>
           <div> <AiFillLike /></div>
           <div><MdOutlineFileUpload /></div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default FeedCard