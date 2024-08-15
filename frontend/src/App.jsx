import React from 'react'
import Home from '../src/home/home';
import Courses from './courses/courses';
import Signup from './components/signup';
import Contact from './contact/contact.jsx';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
   <>
{/* <Home />
<Course /> */}
<Routes>
<Route path='/' element={<Home />} />
<Route path='/course' element={<Courses />} />
<Route path='/signup' element={<Signup />} />
<Route path='/contact' element={<Contact />} />
</Routes>
   </>
  )
}

export default App;
