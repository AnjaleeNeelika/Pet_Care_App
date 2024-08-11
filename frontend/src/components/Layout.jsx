import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='bg-[#f5f1ff]'>
            <Outlet />
        </main>
    )
}

export default Layout