import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                 
               <h3 className='text-xl mb-2 mt-2'>Spent time on read <span className='text-red-600'>{readingTime}</span> min</h3>
            </div>
            <h2 className='ml-2'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark bookmark = {bookmark} key = {idx}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks : PropTypes.object,
    readingTime : PropTypes.number
}
export default Bookmarks;