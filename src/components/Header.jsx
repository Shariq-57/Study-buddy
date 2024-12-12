import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';



// const NavigateButton = ({ path, label }) => {
//   const navigate = useNavigate();
//   return <button onClick={() => navigate(path)}>{label}</button>;
// };

const Header = () => {
  const dispath = useDispatch()
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  return (
    <BrowserRouter>
      <div className="flex flex-wrap sm:justify-between justify-center items-center p-4 border-b-2 gap-4">
        <div>
          <h1 className='font-extrabold sm:text-3xl text-2xl relative'>
            <span className=''>Stud</span>y Buddy
            <hr className='absolute left-0 top-7 inline mt-1 w-[60px] border-2 border-black' />
            <hr className='absolute left-0 top-9 inline mt-1 w-[50px] border-2 border-black' />
          </h1>
        </div>

        {isLoggedIn && <div className=' flex gap-6'>
          <Link className='text-lg font-medium cursor-pointer hover:text-gray-500' to="/blogs" target='_parent'>All Blogs</Link>

          <Link className='text-lg font-medium cursor-pointer hover:text-gray-500' to="/myBlogs" target='_parent'>My Blogs</Link>

          {/* <span className=' text-lg font-medium cursor-pointer hover:text-gray-500'>Ask AI</span> */}
        </div>}

        <div className='flex items-center gap-3'>
          {!isLoggedIn && <> <Link className=' bg-black text-white px-3 py-2 rounded-3xl text-lg' to="/auth" target='_parent'>
            Login
          </Link>
            <Link className=' bg-black text-white px-3 py-2 rounded-3xl text-lg' to="/auth" target='_parent'>
              SingUp
            </Link>
          </>}
          {isLoggedIn && <Link
            onClick={() => dispath(authActions.logout()) }
            className=' bg-black text-white px-3 py-2 rounded-3xl text-lg' to="/auth" target='_parent'>
            Log out
          </Link>}
        </div>
      </div >
    </BrowserRouter>
  )
}

export default Header