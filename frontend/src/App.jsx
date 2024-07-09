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
import ShowPets from './pages/ShowPets'
import Grooming from './pages/Grooming'
import RegistrationConfirmationCode from './pages/RegistrationConfirmationCode'

const App = () => {
    return (
        <div className='bg-[#f5f1ff] h-screen w-full fixed'>
            <Navbar />
            <div className='w-full h-[calc(100vh-10vh)] mt-[10vh]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
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