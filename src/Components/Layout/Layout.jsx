import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';


export default function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/Register', '/forgetpassword', '/restPassword'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return <>
    {shouldShowNavbar && <Navbar />}
    <div className='layout'>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </>
}
