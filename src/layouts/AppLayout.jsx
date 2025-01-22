import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  return (
    <div>
      {/* 
        - Edit the bg class in App.css for the overall background of the app
        - Next we have the render point for the Routes after the Header
      */}
      <div className="bg"></div>
      <main className='min-h-screen container'>

        <Header /> 
        <Outlet />
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>Footer</div>
    </div>
  )
}

export default AppLayout