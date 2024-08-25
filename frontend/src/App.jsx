import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import OwnerLogin from './pages/OwnerLogin'
import OwnerRegistration from './pages/OwnerRegistration'
import RegistrationConfirmationCode from './pages/RegistrationConfirmationCode'
import LandingPage from './pages/LandingPage'
import Layout from './components/Layout'
import OwnerDashboard from './pages/PetOwner/OwnerDashboard'
import Home from './pages/PetOwner/Home'
import Clinic from './pages/PetOwner/Clinic'
import PetRegistration from './pages/PetOwner/PetRegistration'
import Pharmacy from './pages/PetOwner/Pharmacy'
import Grooming from './pages/PetOwner/Grooming'
import Store from './pages/PetOwner/Store'
import AllPets from './pages/PetOwner/AllPets'


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path='pet-owner' element={<OwnerDashboard />}>
                    <Route path='home' element={<Home />} />
                    <Route path='pet-clinic' element={<Clinic />} />                        
                    <Route path='pet-registration' element={<PetRegistration />} />
                    <Route path='pharmacy' element={<Pharmacy />} />
                    <Route path='grooming' element={<Grooming />} />
                    <Route path='pet-store' element={<Store />} />
                    <Route path='pets' element={<AllPets />} />
                </Route>
                
                <Route path='owner-login' element={<OwnerLogin />} />
                <Route path='owner-registration' element={<OwnerRegistration />} />
                <Route path='confirmation-code' element={<RegistrationConfirmationCode />} />
            </Route>
        </Routes>
    )
}

export default App