import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/PetOwner/Sidebar'

const OwnerDashboard = () => {
    return (
        <div className='w-full h-screen'>
            <div className='z-30 sticky left-0 top-0 h-full'>
                <Sidebar />
            </div>
            <div className='w-full'> 
                <Outlet />
            </div>            
        </div>
    )
}

export default OwnerDashboard