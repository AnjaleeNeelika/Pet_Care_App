import React from 'react'
import { LuLayoutDashboard } from 'react-icons/lu'
import Sidebar from '../Sidebar';
import { RiDashboardFill } from 'react-icons/ri';
import { FaClinicMedical, FaDog, FaStore } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';
import { GiMedicinePills } from 'react-icons/gi';

const PetOwnerSidebar = () => {
    const menus = [
        {name: "Dashboard", link: '/', icon: RiDashboardFill, active: "dashboard"},
        {name: "Clinic", link: 'clinic', icon: FaClinicMedical, active: "clinic"},
        {name: "Grooming", link: '/', icon: FaScissors, active: "grooming"},
        {name: "Pharmacy", link: '/', icon: GiMedicinePills, active: "pharmacy"},
        {name: "Store", link: '/', icon: FaStore, active: "store"},
        {name: "Your Pets", link: '/', icon: FaDog, active: "your-pets"},
    ];

    return (
        <div>
            <Sidebar menus={menus} />       
        </div>
    )
}

export default PetOwnerSidebar