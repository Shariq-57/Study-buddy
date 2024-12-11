import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-wrap sm:justify-between justify-center items-center p-4 border-b-2 gap-4">
      <div>
        <h1 className='font-extrabold sm:text-3xl text-2xl relative'>
          <span className=''>Stud</span>y Buddy
          <hr className='absolute left-0 top-7 inline mt-1 w-[60px] border-2 border-black' />
          <hr className='absolute left-0 top-9 inline mt-1 w-[50px] border-2 border-black' />
        </h1>
      </div>

      <div className=' flex gap-6'>
        <span className=' text-lg font-medium cursor-pointer hover:text-gray-500'>All blogs</span>
        <span className=' text-lg font-medium cursor-pointer hover:text-gray-500'>My Blogs</span>
        {/* <span className=' text-lg font-medium cursor-pointer hover:text-gray-500'>Ask AI</span> */}
      </div>

      <div className='flex items-center gap-3'>
        <button className=' bg-black text-white px-3 py-2 rounded-3xl text-lg'>
          <a href="#">Login</a>
        </button>
        <button className=' bg-black text-white px-3 py-2 rounded-3xl text-lg'>
          <a href="">SingUp</a>
        </button>
        <button className=' bg-black text-white px-3 py-2 rounded-3xl text-lg'>
          <a href="">Log out</a>
        </button>
      </div>
    </div >
  )
}

export default Header