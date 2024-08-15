import React from 'react'
import Navbar from '../components/navbar.jsx';
import Banner from '../components/banner.jsx';
import Footer from '../components/footer.jsx';
import Freebook from '../components/freebook.jsx';


function home() {
  return (
   <>
    <Navbar />
   <Banner />
   <Freebook />
   <Footer />
   </>
  )
}

export default home
