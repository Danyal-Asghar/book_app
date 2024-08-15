import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Contactus from '../components/contactus'

function contact() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
        <Contactus />
    </div>
    <Footer />
    </>
  )
}

export default contact;
