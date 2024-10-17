import PropTypes from 'prop-types';
import './Bookmarks.css'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {
    return (
        <div className="bookmarks-container">

            <div className='reading-time-main'>
                <p>Spent time on read : {readingtime} min</p>
            </div>


            <div className='bookmarks-wrapper'>
                <div className='singel-blog-main'>
                    <h2>Bokkmarked Blogs: {bookmarks.length}</h2>
                    {
                        bookmarks.map((singelBlog, index) => <Bookmark singelBlog={singelBlog} key={index}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number.isRequired
}

export default Bookmarks;