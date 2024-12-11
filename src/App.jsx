import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AddBlog from "./components/AddBlog.jsx"
import Auth from "./components/Auth.jsx"
import BlogDetails from "./components/BlogDetails.jsx"
import Blogs from "./components/Blogs.jsx"
import Header from "./components/Header.jsx"
import New_Component from './components/Sidebar.jsx'
import UserBlogs from "./components/UserBlogs.jsx"

function App() {

  return (
    <>
      <div className="w-full fixed bg-zinc-50">
        <Header />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <New_Component />
        </div>

        <div className="col-span-10 mt-20">

          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />
            </Routes>
          </BrowserRouter>

          {/* <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />
              <Route path="/blogs/add" element={<AddBlog />} />
            </Routes> */}


          {/* <div className=" flex flex-wrap justify-around items-center gap-7">
            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

            <div class="w-[300px] h-[410px] p-3 border bg-slate-200 rounded-2xl  m-2">
              <div class="">
                <img class="w-[100%] h-[290px] p-2 rounded-3xl py-3 border-b-2" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div class="mt-3 position-relative">
                <h1 class="text-2xl">Iphone 15 Pro</h1>
                <p class="text-blue-700 text-xl font-bold mt-2">$140.88</p>
                <button class="text-end text-2xl position-absolute right-0 top-8">
                  <i class="bi bi-cart2 p-2 shadow-2xl border-1 rounded-full" id="AddBtn"></i>
                </button>
              </div>
            </div>

          </div> */}

        </div>
      </div>
    </>
  )
}

export default App