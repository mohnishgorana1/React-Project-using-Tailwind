import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
       <div className='flex flex-col items-center justify-center gap-8 max-w-[950px] mt-[-96px] w-full h-screen mx-auto'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl md:  sm:text-6xl text-4xl font-bold'>Grow with data</h1>  
        <div className='flex gap-0 items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible financing for </p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold  text-gray-300' 
              strings={['BTB', "BTC", "SASS"]}
              typeSpeed={120} 
              backSpeed={140} 
              loop 
            />
        </div>
        <p className='md:text-2xl text-l font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTX, & SASS platforms</p>
        <button className='bg-[#00df9a] w-[200px] text-black text-xl rounded-md font-medium my-[-10px] mx-auto py-3 '>Get Started</button>

       </div>
    </div>
  )
}

export default Hero