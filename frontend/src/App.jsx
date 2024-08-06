import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Clinic from './pages/Clinic'
import OwnerLogin from './pages/OwnerLogin'
import OwnerRegistration from './pages/OwnerRegistration'
import PetRegistration from './pages/PetRegistration'
import Pharmacy from './pages/Pharmacy'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import ShowPets from './pages/ShowPets'
import Grooming from './pages/Grooming'
import RegistrationConfirmationCode from './pages/RegistrationConfirmationCode'
import Sidebar from './components/Sidebar'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'

const App = () => {
    return (
        <div className='bg-[#f5f1ff] h-screen w-full fixed overflow-auto'>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <div className='w-full h-screen'>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    {/* <Route path='/home' element={<Home />} /> */}
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/pet-clinic' element={<Clinic />} />
                    <Route path='/owner-login' element={<OwnerLogin />} />
                    <Route path='/owner-registration' element={<OwnerRegistration />} />
                    <Route path='/pet-registration' element={<PetRegistration />} />
                    <Route path='/pharmacy' element={<Pharmacy />} />
                    <Route path='/grooming' element={<Grooming />} />
                    <Route path='/pet-store' element={<Store />} />
                    <Route path='/pets' element={<ShowPets />} />
                    <Route path='/confirmation-code' element={<RegistrationConfirmationCode />} />
                </Routes>
            </div>            
        </div>
    )
}

export default App