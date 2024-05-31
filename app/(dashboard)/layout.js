"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'


function layout({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    
    <div className="h-full">
      <div className={`h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <SideNav toggleMenu={toggleMenu}/>
      </div>
      <div className={`md:ml-64 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
      <TopHeader toggleMenu={toggleMenu}/>
      {children}
      </div>
      
    </div>
  )
}

export default layout