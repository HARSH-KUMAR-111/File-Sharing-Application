import React from 'react'
import SideNav from './_components/SideNav'

function layout({children}) {
  return (
    
    <div>
      <h1>Home</h1>
      <div>
        <SideNav/>
      </div>
      {children}
    </div>
  )
}

export default layout