import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddtoBookmark, handleMarkAsRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl ml-2">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog blog ={blog} handleAddtoBookmark = {handleAddtoBookmark} handleMarkAsRead = {handleMarkAsRead} key = {blog.id} ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddtoBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blogs;