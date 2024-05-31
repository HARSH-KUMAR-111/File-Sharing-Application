import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({toggleMenu}) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden cursor-pointer' onClick={toggleMenu} />
      <Image src='/logo.svg' width={150} height={100} className='md:hidden'/>
      <UserButton/>
    </div>
  )
}

export default TopHeader