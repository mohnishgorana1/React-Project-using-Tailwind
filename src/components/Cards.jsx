import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 px-10'>
            <div className='w-full shadow-2xl flex flex-col p-4 py-10 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-slate-200'>
                <img className='w-20 mx-auto mt-[-3rem] p-2 bg-white' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center md:text-4xl font-bold'>Rs.149</p>
                <div className='text-center flex flex-col gap-1 my-4'>
                    <p className= 'shadow-sm'>500 GB Storage</p>
                    <p className= 'shadow-sm'>1 Granted User</p>
                    <p className= 'shadow-sm'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] text-black text-xl rounded-md font-medium  mx-auto py-3 hover:bg-black hover:text-[#00df9a]' >Start Trial </button>
            </div>

            <div className='w-full shadow-2xl flex flex-col p-4 py-10 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-slate-200'>
                <img className='w-20 mx-auto mt-[-3rem] p-2 bg-white' src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center md:text-4xl font-bold'>Rs.199</p>
                <div className='text-center flex flex-col gap-1 my-4'>
                    <p className= 'shadow-sm'>1 TB Storage</p>
                    <p className= 'shadow-sm'>3 Granted User</p>
                    <p className= 'shadow-sm'>Send upto 10 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] text-black text-xl rounded-md font-medium  mx-auto py-3 hover:bg-black hover:text-[#00df9a]' >Start Trial </button>
            </div>
            
            <div className='w-full shadow-2xl flex flex-col p-4 py-10 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-slate-200'>
                <img className='w-20 mx-auto mt-[-3rem] p-2 bg-white' src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center md:text-4xl font-bold'>Rs.299</p>
                <div className='text-center flex flex-col gap-1 my-4'>
                    <p className= 'shadow-sm'>5 TB Storage</p>
                    <p className= 'shadow-sm'>10 Granted User</p>
                    <p className= 'shadow-sm'>Send upto 20s GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] text-black text-xl rounded-md font-medium  mx-auto py-3 hover:bg-black hover:text-[#00df9a]' >Start Trial </button>
            </div>
        </div>
    </div>
  )
}

export default Cards