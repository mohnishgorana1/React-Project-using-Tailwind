import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop-img" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-extrabold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi modi harum consectetur veritatis repellendus placeat ut, autem accusantium, vitae ab iure laudantium animi obcaecati et tempora perspiciatis deserunt mollitia eveniet?
                </p>
                <button className='bg-black w-[200px] text-[#00df9a] text-xl rounded-md font-medium my-8 mx-auto md:mx-0 py-3 '>Get Started</button>
                
            </div>
        </div>

    </div>
  )
}

export default Analytics