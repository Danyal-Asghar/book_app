import React from 'react'
import Card from '../components/card'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 sm:px-4   ">
      <div className="items-center justify-center text-center   ">
        <h1 className='font-semibold text-2xl md:text-4xl pt-28'>we're Delighted to have you <span className='text-pink-500'>Here :)</span></h1>
        <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aliquam ipsa ipsum repellat ut, voluptates laudantium deserunt saepe asperiores consectetur magnam labore nostrum sequi eveniet. Iure voluptatem dolorem laboriosam dicta.</p>
     <Link to={"/"}>
     <button className='btn mt-4 bg-pink-500 text-white hover:bg-pink-700 duration-300'>Back</button>
     </Link>
      </div>
      <div className="mt-10  grid grid-cols-1 md:grid-cols-3 ">
      {list.map((item)=>(
    <Card item={item} key={item.id} />
  ))}
      </div>
    </div>
    
    </>
  )
}

export default course
