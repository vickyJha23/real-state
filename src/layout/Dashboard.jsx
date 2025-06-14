import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'




const Dashboard = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Dashboard
