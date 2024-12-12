import React from 'react'

const Blog = (title, discription, imageURL, userNmae) => {
    return (
        <div className=' flex justify-center items-center gap-4'>
            <div className='rounded-3xl w-[200px] h-[300px] shadow-2xl bg-zinc-100 border-2'>
                <div className=''>
                    <img className='p-4 overflow-hidden w-[100%] object-cover h-[200px] rounded-3xl' src={imageURL} alt="" />
                </div>

                <div className=' font-bold text-center text-blue-400'>
                    <h1 className=' text-lg'>{title}</h1>
                    <p className=' text-xs text-zinc-400'>{discription}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog