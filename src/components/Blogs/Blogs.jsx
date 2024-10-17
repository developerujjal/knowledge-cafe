import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import "./Blogs.css"
import Blog from "../Blog/Blog";


const Blogs = ({handleAddBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('blogsData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    
    return (
        <div className="blogs-container">
            {
                blogs.map((blog)=> <Blog
                blog={blog}
                handleAddBookmarks={handleAddBookmarks}
                handleReadingTime={handleReadingTime}
                key={blog.id}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;