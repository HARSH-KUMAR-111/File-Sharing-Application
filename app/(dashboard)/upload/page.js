"use client"
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import UploadForm from './_components/UploadForm';

function Upload() {
  return (
    <div className='p-5 px-8 md:px-28'>
      Upload
      <h2 className='text-[20px] text-center m-5'> Start 
        <span className="text-red-600 font-bold"> Uploading</span> and <span className="text-red-600 font-bold">Sharing</span> File </h2>
      <UploadForm/>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Upload