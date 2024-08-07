import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Clinic from './pages/Clinic'
import OwnerLogin from './pages/OwnerLogin'
import OwnerRegistration from './pages/OwnerRegistration'
import PetRegistration from './pages/PetRegistration'
import Pharmacy from './pages/Pharmacy'
import Store from './pages/Store'
import ShowPets from './pages/ShowPets'
import Grooming from './pages/Grooming'
import RegistrationConfirmationCode from './pages/RegistrationConfirmationCode'
import LandingPage from './pages/LandingPage'
import Layout from './components/Layout'
import OwnerDashboard from './pages/OwnerDashboard'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<LandingPage />} />
                {/* <Route path='/home' element={<Home />} /> */}
                <Route path='user-dashboard' element={<OwnerDashboard />}>
                    <Route path='home' element={<Home />} />
                    <Route path='pet-clinic' element={<Clinic />} />                        
                    <Route path='pet-registration' element={<PetRegistration />} />
                    <Route path='pharmacy' element={<Pharmacy />} />
                    <Route path='grooming' element={<Grooming />} />
                    <Route path='pet-store' element={<Store />} />
                    <Route path='pets' element={<ShowPets />} />
                </Route>
                
                <Route path='owner-login' element={<OwnerLogin />} />
                <Route path='owner-registration' element={<OwnerRegistration />} />
                <Route path='confirmation-code' element={<RegistrationConfirmationCode />} />
            </Route>
        </Routes>
    )
}

export default App