
function Newsletter() {
  return (
    <div className="w-full py-16 text-white ">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-1 lg:flex-row lg:justify-around px-3">
            <div className="">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimze your flow</h1>
                <p>Sign up to our Newsletter and stay up to date.</p>
            </div>
            <div className="my-5">
                <div className="flex">
                    <input className="p-3 flex w-[90%] md:w-full rounded-md text-black " type="email" placeholder="Enter Email" />
                    <button className='bg-[#00df9a] w-[200px] text-black text-xl rounded-md font-medium ml-4 my-  px-6 py-3  '>Notify Me</button>
                </div>
                <p className="my-4">We care about the protection of your data. Read our <span className="text-[#00df9a] hover:cursor-pointer">Privacy Policy</span>.</p>


            </div>
        </div>
    </div>
  )
}

export default Newsletter