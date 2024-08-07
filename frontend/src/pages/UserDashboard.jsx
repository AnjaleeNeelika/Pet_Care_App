import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
    return (
        <div className='w-full'>
            <div className='z-50'>
                <Sidebar />
            </div>
            <div className='w-full'> 
                <Outlet />
            </div>
            
        </div>
    )
}

export default UserDashboard