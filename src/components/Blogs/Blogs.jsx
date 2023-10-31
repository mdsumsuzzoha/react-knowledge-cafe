import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBoormark, handleAddReadTime }) => {
    // const {handleAddBoormark}=props;

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, [])
    // console.log(blogs);
    return (
        <div className="md:w-2/3">
            <h4>Blogs: {blogs.length}</h4>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBoormark={handleAddBoormark} handleAddReadTime={handleAddReadTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    // blog: PropTypes.object.isRequired,
    handleAddBoormark: PropTypes.func,
    handleAddReadTime: PropTypes.func
}
export default Blogs;