import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddBoormark, handleAddReadTime }) => {
    // const { handleAddBoormark } = props;
    // console.log(blog);
    const {id, title, cover_image_url, author, author_img, post_date, reading_time, hashtag } = blog;
    return (
        <div className='my-6 px-2'>
            <img className='rounded' src={cover_image_url} alt="" />
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} minutes</span>
                    <button onClick={() => handleAddBoormark(blog)}>Add to Bookmark</button>
                </div>
            </div>
            <h3 className='text-4xl py-4'>{title}</h3>
            <a href="">
                {hashtag}
            </a>
            <br />
            <button onClick={() => handleAddReadTime(reading_time, id)}>Mark as Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBoormark: PropTypes.func,
    handleAddReadTime: PropTypes.func
}
export default Blog;