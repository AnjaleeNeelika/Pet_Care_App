import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='bg-[#FAFAFC]'>
            <Outlet />
        </main>
    )
}

export default Layout