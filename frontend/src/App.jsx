import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Clinic from './pages/Clinic'
import OwnerLogin from './pages/OwnerLogin'
import OwnerRegistration from './pages/OwnerRegistration'
import PetRegistration from './pages/PetRegistration'
import Pharmacy from './pages/Pharmacy'
import Spa from './pages/Spa'
import Store from './pages/Store'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className='w-full h-screen bg-[#f5f1ff] fixed'>
            <Navbar />
            <div className='w-full h-full overflow-auto'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/pet-clinic' element={<Clinic />} />
                    <Route path='/owner-login' element={<OwnerLogin />} />
                    <Route path='/owner-registration' element={<OwnerRegistration />} />
                    <Route path='/pet-registration' element={<PetRegistration />} />
                    <Route path='/pharmacy' element={<Pharmacy />} />
                    <Route path='/pet-spa' element={<Spa />} />
                    <Route path='/pet-store' element={<Store />} />
                    <Route path='/pets' element={<Store />} />
                </Routes>
            </div>            
        </div>
    )
}

export default App