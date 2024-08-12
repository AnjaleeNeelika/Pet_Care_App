import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='bg-bgColor'>
            <Outlet />
        </main>
    )
}

export default Layout