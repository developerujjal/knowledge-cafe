import { useEffect } from "react";
import { useState } from "react";
import "./Blogs.css"
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('blogsData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log(blogs)

    
    return (
        <div className="blogs-container">
            {
                blogs.map((blog)=> <Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;