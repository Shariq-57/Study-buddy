import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setblogs] = useState();
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/blog").catch(err => console.log(err));
    const data = await res.data;
    return data
  }
  useEffect(() => {
    sendRequest().then(data => setblogs(data.blogs))
  }, [])
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.map((blogs, index) => {
        <Blog title={blogs.title} discription={blogs.discription} imageURL={blogs.imageURL} />
      })}
    </div>
  )
}

export default Blogs