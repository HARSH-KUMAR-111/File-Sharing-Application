"use client"
import { File, Shield, Upload } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
function SideNav({toggleMenu}) {
  const menuList=[
  {  id:1,
    name:'Upload',
    icon:File,
    path:'/upload'},

  {  id:2,
    name:'Files',
    icon:Upload,
    path:'/files'},

  {  id:3,
    name:'Upgrade',
    icon:Shield,
    path:'/Upgrade'},
  ]

  const [activeIndex,setActiveIndex]=useState();
  return (
    <div className=''>
      <div className='p-5 border-b'>
        <Image src='/logo.svg' width={150}
        height={100}
        />
      </div>
        <div className='flex flex-col float-left w-full'>
          {menuList.map((item,index)=>(
            <button className={`flex gap-2 p-4 px-0
            hover:bg-gray-100 w-full
            text-gray-500
            ${activeIndex==index?'bg-blue-50 text-primary':null}`}
            onClick={()=>setActiveIndex(index)}
            >
              <item.icon/>
              <h2>{item.name}</h2>
            </button>
          ))}
        </div>
    </div>
  )
}

export default SideNav