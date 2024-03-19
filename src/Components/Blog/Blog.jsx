import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddtoBookmark,handleMarkAsRead}) => {
    // console.log(blog);

    const {title,cover,reading_time,author_img,author,posted_date,hashtags,id} = blog;
    return (
        <div className='mt-6 mb-16 ml-2 space-y-2'>
            <img className='w-full rounded-md' src={cover} alt={`cover picture of title${title}`}/>
            <div className='flex justify-between'>
                <div className='flex mt-10 mb-4'>
                    <img className='w-14' src={author_img} alt="" />

                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>



                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddtoBookmark(blog)} className='ml-2 text-xl text-red-600 mt-4'><FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h2 className='text-3xl'> {title} </h2>

            <p className='flex gap-4 mt-4 text-blue-800'>
                {
                    hashtags.map((hash,idx) => <span key = {idx}> <a href="">#{hashtags}</a> </span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(reading_time,id)} className='text-purple-700 underline'>Mark as read</button>
        </div>
    );
};

// propTyles validation --> terminal: "npm install --save prop-types"

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blog;