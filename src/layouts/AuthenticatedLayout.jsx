import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NewsLetterModel from '../components/NewsLetterModel/NewsLetterModel'

const AuthenticatedLayout = () => {
  return (
    <>
    
        <Navbar />
        <main class="bg-grey-eeeeee" >
            <Outlet />
        </main>
        <Footer/>
    </>
  )
}

export default AuthenticatedLayout