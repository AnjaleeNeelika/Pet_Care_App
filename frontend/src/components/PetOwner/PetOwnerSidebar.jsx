import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import Sidebar from '../Sidebar';
import { RiDashboardFill } from 'react-icons/ri';
import { FaClinicMedical, FaDog, FaStore } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';
import { GiMedicinePills } from 'react-icons/gi';

const PetOwnerSidebar = () => {
    const menus = [
        {name: "Dashboard", link: '/', icon: RiDashboardFill},
        {name: "Clinic", link: 'clinic', icon: FaClinicMedical},
        {name: "Grooming", link: '/', icon: FaScissors},
        {name: "Pharmacy", link: '/', icon: GiMedicinePills},
        {name: "Store", link: '/', icon: FaStore},
        {name: "Your Pets", link: '/', icon: FaDog},
    ];

    return (
        <div>
            <Sidebar menus={menus} />       
        </div>
    )
}

export default PetOwnerSidebar