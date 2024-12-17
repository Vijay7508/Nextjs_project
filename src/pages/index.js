import React from 'react'
import AutoCarousel from './Home/Crousel';
import Filters from './Home/Filters';
import HelpUs from './Home/HelpUs';
import Vendors from './Home/Vendors';
import CustomerSay from './Cusotmer/CoustomerSay';
import ContactVendors from './Vendors/ContactVendors';
import VendorsSay from './Vendors/VendorsSay';

const Home = () => {
  return (
    <>
    <div className="relative"> 
                <AutoCarousel />
                <div className="absolute flex items-center justify-center z-10 inset-0">
                    <Filters />
                </div>
            </div>
            <Vendors/>
            <HelpUs/>
            <CustomerSay/>
            <ContactVendors/>
            <VendorsSay/>
    </>
  )
}

export default Home