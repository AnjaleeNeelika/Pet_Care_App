import React from 'react'
import { Outlet } from 'react-router-dom'
import PetOwnerSidebar from '../components/PetOwner/PetOwnerSidebar'

const OwnerDashboard = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='z-30 sticky left-0 top-0 h-full'>
                <PetOwnerSidebar />
            </div>
            <div className='w-full'> 
                <Outlet />
            </div>            
        </div>
    )
}

export default OwnerDashboard